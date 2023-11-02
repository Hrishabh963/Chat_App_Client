import axios from "axios";

export const loginUser = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data);
        if (response.status !== 200) {
            return response.data.message
        }
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
}

export const signUp = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, data)
        console.log(response.data);
        return response.data
    } catch (error) {
        throw error.response.data.message;
    }
}