import axios from "axios";
import {BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL} from "../Config/api";
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse , InternalAxiosRequestConfig} from "axios";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../Config/Constant";


axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config : InternalAxiosRequestConfig) : InternalAxiosRequestConfig=> {
    if (config.url === REFRESH_TOKEN_URL) {
        config.headers.refreshToken = localStorage.getItem(REFRESH_TOKEN);
    } else if (config.url !== LOGIN_URL) {
        config.headers.token = localStorage.getItem(ACCESS_TOKEN);
    }
    return config
} );


export default axios;