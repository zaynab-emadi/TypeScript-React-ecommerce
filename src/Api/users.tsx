import axios from "./axios";
import {LOGIN_URL, REFRESH_TOKEN_URL} from "../Config/api";

interface userType {
    userName : string,
    password : string,
}

export const loginRequest = async (user : userType) => {
    try {
        console.log("request" , user)
        const response = await axios.post(LOGIN_URL , user)
        console.log(response)
        return response.data;
    }catch (error : any){
        console.log("catch request")
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