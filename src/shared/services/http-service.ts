import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpServiceImpl {
  private baseUrl: string = "";
  private _client!: AxiosInstance;

  constructor(url: string = "") {
    this._client = Axios.create(this.mergeConfig());
    this.baseUrl = url;
  }

  get<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this._client.get<ResponseType>(url, this.mergeConfig(config));
  }

  put<ResponseType>(url: string, body?: any, config?: AxiosRequestConfig) {
    return this._client.put<ResponseType>(url, body, this.mergeConfig(config));
  }

  private mergeConfig(config?: AxiosRequestConfig) {
    return {
      ...config,
      headers: {
        "cache-control": "no-cache",
        ...config?.headers,
      },
      baseURL: this.baseUrl,
    } as AxiosRequestConfig;
  }
}

export const HttpService = new HttpServiceImpl(process.env.REACT_APP_API_URL);
