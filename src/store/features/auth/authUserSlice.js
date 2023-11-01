import { createSlice, createAsyncThunk, autoBatchEnhancer } from "@reduxjs/toolkit";
import { loginUser, signUp } from "./authUser";

// initialize userToken from local storage
const token = localStorage.getItem('userToken') ?
    localStorage.getItem('userToken') :
    null

const initialState = {
    loading: true,
    token,
    success: null,
    errorMessage: null
}

export const userSignUp = createAsyncThunk('auth/signup', async(data, { rejectWithValue }) => {
    try {
        const responseData = await signUp(data);
        if (!responseData.token) {
            rejectWithValue(responseData);
        }
        return responseData;
    } catch (error) {
        throw error;
    }
})

export const userLogin = createAsyncThunk('auth/login', async(data, { rejectWithValue }) => {
    try {
        const responseData = await loginUser(data);
        if (!responseData.token) {
            rejectWithValue(responseData);
        }
        return responseData;
    } catch (error) {
        throw error;
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userSignUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(userSignUp.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                localStorage.setItem('userToken', action.payload.token);
                state.success = true;
            })
            .addCase(userSignUp.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errorMessage = action.error.message;
            })
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                localStorage.setItem('userToken', action.payload.token);
                state.success = true;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errorMessage = action.error.message;
            })
    }
})

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;