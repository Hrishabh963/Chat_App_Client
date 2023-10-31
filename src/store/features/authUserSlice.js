import { createSlice, createAsyncThunk, autoBatchEnhancer } from "@reduxjs/toolkit";
import { signUp } from "./authUser";

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ?
    localStorage.getItem('userToken') :
    null

const initialState = {
    loading: false,
    userToken,
    success: false,
}

export const userSignUp = createAsyncThunk('auth/signup', async(data, { rejectWithValue }) => {
    const data = await signUp(data);
    if (!data.token) {
        return rejectWithValue(data.message);
    }
    return data
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
                state.userToken = action.payload.token;
                state.success = true;
            })
    }
})

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;