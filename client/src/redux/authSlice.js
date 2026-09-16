import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: localStorage.getItem("token") || null
    },
    reducers:{
        storeToken:(state,action)=>{
            state.token=action.payload;
            localStorage.setItem("token",action.payload);
        },
    },
})
export const {storeToken}=authSlice.actions;
export default authSlice.reducer;