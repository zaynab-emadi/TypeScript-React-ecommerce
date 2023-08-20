import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IS_LOGGED_IN} from "../../Config/Constant";

interface initialStateTypes {
    isLoggedIn : string | boolean | null,
    error : string
}
const initialState : initialStateTypes = {
    isLoggedIn : localStorage.getItem(IS_LOGGED_IN) ? localStorage.getItem(IS_LOGGED_IN) : false,
    error : ""

};
//TODO : creat login request then edit creatAsyncThunk of login
export const login = createAsyncThunk("users/login" , (user) => {

});

// TODO : creat refreshTokenRequest then edit creatAsyncThunk of refresh token
export const refreshToken = createAsyncThunk("users/refreshToken" , (user) => {

});

//TODO : creat userSlice

// export const userSlice  = createSlice()
