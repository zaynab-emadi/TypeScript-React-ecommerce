import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ACCESS_TOKEN, IS_LOGGED_IN, REFRESH_TOKEN} from "../../Config/Constant";
import {loginRequest, refreshTokenRequest} from "../../Api/users";

interface initialStateTypes {
    isLoggedIn : string | boolean | null,
    error : string
}
const initialState : initialStateTypes = {
    isLoggedIn : localStorage.getItem(IS_LOGGED_IN) ? localStorage.getItem(IS_LOGGED_IN) : false,
    error : ""

};
export const login = createAsyncThunk("users/login" , (user) => {
    return loginRequest(user)
        .then((response) => {
            localStorage.setItem(ACCESS_TOKEN , response.accessToken);
            localStorage.setItem(REFRESH_TOKEN , response.refreshToken);
            //TODO : change string true to boolean true
            localStorage.setItem(IS_LOGGED_IN , 'true');
            return response;
        })
        .catch((error) => {
            return Promise.reject(error)
        })
});

export const refreshToken = createAsyncThunk("users/refreshToken" , () => {
    return refreshTokenRequest()
        .then((response) => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            return response
        })
        .catch((error) => {
           return  Promise.reject(error)
        })
});

//TODO : creat userSlice

// export  const userSlice = createSlice({
//     name : "users" ,
//     initialState ,
//     extraReducers : (builder) => {
//
//     }
// })
