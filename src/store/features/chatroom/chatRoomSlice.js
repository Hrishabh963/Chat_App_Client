import { createSlice } from "@reduxjs/toolkit";
import { getAllChatRooms, postChatRoom, joinChatroom, getAllMembersInChatRoom, getCurrentChatroom } from "./chatRoomAction";


const initialState = {
    chatrooms: [],
    currentChatroom: null,
    currentChatroomMembers: [],
    error: null
}

const chatRoomSlice = createSlice({
    name: 'chatroom',
    initialState,
    reducers: {
        setCurrentRoom: (state, action) => {
            state.currentChatroom = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllChatRooms.fulfilled, (state, action) => {
                state.chatrooms = action.payload;
            })
            .addCase(postChatRoom.fulfilled, (state, action) => {
                state.chatrooms.push(action.payload);
            })
            .addCase(joinChatroom.fulfilled, (state, action) => {
                state.currentChatroom = action.payload;
            })
            .addCase(getAllMembersInChatRoom.fulfilled, (state, action) => {
                state.currentChatroomMembers = action.payload;
            })
    }
})

export const chatroomReducer = chatRoomSlice.reducer;
export const { setCurrentRoom } = chatRoomSlice.actions;