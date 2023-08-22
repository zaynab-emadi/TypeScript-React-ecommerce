import axios from "./axios";
import {LOGIN_URL, REFRESH_TOKEN_URL} from "../Config/api";

// interface userType {
//
// }
//TODO : edit type of user
export const loginRequest = async (user : any) => {
    try {
        const response = await axios.post(LOGIN_URL , user)
        return response.data;
    }catch (error : any){
        return Promise.reject(error.response.data)
    }
};

export const refreshTokenRequest = async() => {
    try {
        const response = await axios.post(REFRESH_TOKEN_URL);
        return response.data;
    }catch (error : any){
        return Promise.reject(error.response.data())
    }
}