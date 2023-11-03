import { createSlice } from "@reduxjs/toolkit";
import { getMessages, postMessage } from "./messageActions";

const initialState = {
    messages: [],
    loading: true,
    error: null
}
const messageSlice = createSlice({
    name: 'message',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(postMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.messages.push(action.payload);
            })
            .addCase(getMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
            })

    }
})

export const messageReducer = messageSlice.reducer;