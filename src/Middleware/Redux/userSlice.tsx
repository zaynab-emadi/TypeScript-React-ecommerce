import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ACCESS_TOKEN, IS_LOGGED_IN, REFRESH_TOKEN} from "../../Config/Constant";
import {loginRequest, refreshTokenRequest} from "../../Api/users";

interface initialStateTypes {
    isLoggedIn : string | boolean | null,
    error ?: any
}
interface userType {
    userName : string,
    password : string,
    role ? : any
}
const initialState : initialStateTypes = {
    isLoggedIn : localStorage.getItem(IS_LOGGED_IN) ? localStorage.getItem(IS_LOGGED_IN) : false,
    error : ""

};
export const login = createAsyncThunk("users/login" , (user : userType) => {
    return loginRequest(user)
        .then((response) => {
            localStorage.setItem(ACCESS_TOKEN , response.accessToken);
            localStorage.setItem(REFRESH_TOKEN , response.refreshToken);
            localStorage.setItem(IS_LOGGED_IN , JSON.stringify(true));
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

export  const userSlice = createSlice({
    name: 'users',
    initialState ,
    reducers: {},
    // TODO : remove console logs
    extraReducers : (builder) => {
        //login
        builder.addCase(login.fulfilled , (state , action) => {
            console.log("fulfilled" , action)
            return { isLoggedIn: true };
        });
        builder.addCase(login.rejected , (state , action) => {
            console.log("rejected" , action)
            return {isLoggedIn : false , error : action.error.message }
        });

        //refresh token
        builder.addCase(refreshToken.fulfilled ,(state ,action ) => {
            console.log("fulfilled", action);
            return {isLoggedIn : true};
        });
        builder.addCase(refreshToken.rejected , (state , action) => {
            return {isLoggedIn : false , error: action.error.message}
        })
    },
    }
);

