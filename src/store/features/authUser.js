import axios from "axios";

export const loginUser = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const signUp = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, data)
        return response.data
    } catch (error) {
        throw error;
    }
}