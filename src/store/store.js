import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authUserSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})