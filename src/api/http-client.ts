import axios, { AxiosInstance, AxiosResponse } from "axios";
import Main from "./main";
import TokensLocalStorage from "../utils/local-storage/TokensLocalStorage";

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(
    baseURL: string | undefined,
    contentType = "application/json"
  ) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": contentType,
      },
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleSuccessResponse,
    );
  };

  private handleSuccessResponse = ({ data }: AxiosResponse) => data;

  private handleResponseError = async (e: any): Promise<any> => {
    const status = e.response ? e.response.status : null;
    const tokens = TokensLocalStorage.getInstance();
    const main = Main.getInstance();
    const currentRefreshToken = tokens.getRefreshToken();

    if (status === 401 && currentRefreshToken) {
      try {
        const { data } = await axios.request(e.config);
        return data;
      } catch (_) {
        tokens.clear();
        return Promise.reject(e);
      }
    }
    return Promise.reject(e);
  };
}

export default HttpClient;
