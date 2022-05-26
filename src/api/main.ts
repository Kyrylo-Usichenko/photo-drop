import HttpClient from "./http-client";

export interface LoginResponse {
  access_token: string;
  user_data: {
    email: null,
    fullname: null,
    id: null,
    login: null
  }
}

class Main extends HttpClient {
  private static instanceCached: Main;

  private constructor() {
    super(process.env.REACT_APP_BASE_URL);
  }

  static getInstance = () => {
    if (!Main.instanceCached) {
      Main.instanceCached = new Main();
    }

    return Main.instanceCached;
  };

  public login = (data: {}) =>
    this.instance.post<LoginResponse>("/login", data);

}

export default Main;
