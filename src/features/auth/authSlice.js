import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user=JSON.parse(localStorage.getItem('user'))

const initialState ={
    user: user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

// register user
export const register=createAsyncThunk(
    "auth/register",
    async(userData,thunkAPI)=>{
        try {
            return authService.register(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)
// login user
export const login=createAsyncThunk(
    "auth/login",
    async(userData,thunkAPI)=>{
        try {
            return authService.login(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)
// logout user
export const logout=createAsyncThunk(
    "auth/logout",
    async()=>{
        authService.logout()
       
    }
)
// activate user
export const activate=createAsyncThunk(
    "auth/activate",
    async(userData,thunkAPI)=>{
        try {
            return authService.activate(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)

// reset password
export const resetPassword=createAsyncThunk(
    "auth/resetPassword",
    async(userData,thunkAPI)=>{
        try {
            return authService.resetPassword(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)

// reset password confirm
export const resetPasswordConfirm=createAsyncThunk(
    "auth/resetPasswordConfirm",
    async(userData,thunkAPI)=>{
        try {
            return authService.resetPasswordConfirm(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message=""
        }
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
           
        })
        .addCase(login.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
           
        })
        .addCase(logout.fulfilled, (state)=>{
            state.user=null
        })
       
    }
})

export const {reset}=authSlice.actions
export default authSlice.reducer