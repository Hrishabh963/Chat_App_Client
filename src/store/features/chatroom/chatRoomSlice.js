import { createSlice } from "@reduxjs/toolkit";
import { getAllChatRooms, postChatRoom } from "./chatRoomAction";


const initialState = {
    chatrooms: [],
    currentChatroom: null,
    error: null
}

const chatRoomSlice = createSlice({
    name: 'chatroom',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllChatRooms.fulfilled, (state, action) => {
            state.chatrooms = action.payload;
        })
        builder.addCase(postChatRoom.fulfilled, (state, action) => {
            state.chatrooms.push(action.payload);
        })
    }
})

export const chatroomReducer = chatRoomSlice.reducer;