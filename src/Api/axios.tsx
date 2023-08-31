import axios from "axios";
import { BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL } from "../Config/api";
import {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../Config/Constant";
import { refreshToken } from "../Middleware/Redux/userSlice";

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.url === REFRESH_TOKEN_URL) {
      config.headers.refreshToken = localStorage.getItem(REFRESH_TOKEN);
    } else if (config.url !== LOGIN_URL) {
      config.headers.token = localStorage.getItem(ACCESS_TOKEN);
    }
    return config;
  }
);
axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: any | null) => {
    // Reject promise if usual error
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === REFRESH_TOKEN_URL
    ) {
      return Promise.reject(error);
    }
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {
        localStorage.removeItem(ACCESS_TOKEN);
      }
    }
  }
);

export default axios;
