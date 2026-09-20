import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API='http://localhost:3000'
export const userAuthentication=createAsyncThunk(
    "auth/userAuthentication",async(_, {getState , rejectWithValue})=>{
        try {
            const token=getState().auth.token;
            const response=await axios.get(`${API}/api/auth/user`,{
                headers:{
                    Authorization:token
                }
            });
            console.log("User data: ",response.data.userData)
            return response.data.userData
        } catch (error) {
            console.log("Error fatching user data",error)
            return rejectWithValue(
                error.response?.data?.message || "Error fetching user data"
            )
        }
    }
)


const authSlice=createSlice({
    name:"auth",
    initialState:{
        token: localStorage.getItem("token") || null,
        isLoggedIn: !!localStorage.getItem("token"),
        user: null,
        isLoading: false,
        error: null
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
            state.user=null
            localStorage.removeItem("token")
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userAuthentication.pending,(state)=>{
            state.isLoading=true
            state.error=null
        })
        .addCase(userAuthentication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.user=action.payload
        })
        .addCase(userAuthentication.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
    }

})
export const {storeToken,logout}=authSlice.actions;
export default authSlice.reducer;