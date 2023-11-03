import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const postMessage = createAsyncThunk('message/postMessage', async({ chatroomId, token, text }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/message/${chatroomId}/postMessage`, { text }, {
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


export const getMessages = createAsyncThunk('message/getMessages', async({ chatroomId, token }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/message/${chatroomId}/getMessages`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
})