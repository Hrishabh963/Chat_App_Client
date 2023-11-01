import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllChatRooms = createAsyncThunk('chatroom/getChatrooms', async(token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/chatroom/getChatrooms`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
})

export const postChatRoom = createAsyncThunk('chatroom/postChatroom', async({ data, token }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/chatroom/createRoom`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
})