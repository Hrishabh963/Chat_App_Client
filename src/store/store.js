import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authUserSlice";
import { chatroomReducer } from "./features/chatroom/chatRoomSlice";
import { messageReducer } from "./features/message/messageSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chatroom: chatroomReducer,
        message: messageReducer,
    },

})