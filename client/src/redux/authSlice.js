import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: localStorage.getItem("token") || null,
        isLoggedIn: !!localStorage.getItem("token"),
    },
    reducers:{
        storeToken:(state,action)=>{
            state.token=action.payload;
            state.isLoggedIn=true
            localStorage.setItem("token",action.payload);
        },
        logout:(state)=>{
            state.token=null
            state.isLoggedIn=false
            localStorage.removeItem("token")
        }
    },
})
export const {storeToken,logout}=authSlice.actions;
export default authSlice.reducer;