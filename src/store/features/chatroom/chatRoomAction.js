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

export const joinChatroom = createAsyncThunk('chatroom/joinChatroom', async({ chatroomId, token }) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/chatroom/joinChatroom/${chatroomId}`, null, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
})


export const getAllMembersInChatRoom = createAsyncThunk('chatroom/getAllMembersInChatroom', async({ chatroomId, token }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/chatroom/${chatroomId}/members`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
})


export const getCurrentChatroom = createAsyncThunk('chatroom/getCurrentChatroom', async({ chatroomId, token }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/chatroom//getChatroom/${chatroomId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
})