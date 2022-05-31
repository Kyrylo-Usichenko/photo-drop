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

  public setPhoto = (fields: any, photo: any, url: string) =>
  {
    const formData = new FormData();
    formData.append('acl', "public-read");
    formData.append('key', fields.key);
    formData.append('bucket', fields.bucket);
    formData.append('X-Amz-Algorithm', fields["X-Amz-Algorithm"]);
    formData.append('X-Amz-Credential', fields["X-Amz-Credential"]);
    formData.append('X-Amz-Date', fields["X-Amz-Date"]);
    formData.append('X-Amz-Security-Token', fields["X-Amz-Security-Token"]);
    formData.append('Policy', fields.Policy);
    formData.append("X-Amz-Signature", fields["X-Amz-Signature"]);
    formData.append('file', photo);

    return  this.instance.post<any>(`${url}`,
        formData)

  }

}

export default Main;
