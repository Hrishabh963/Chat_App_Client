import axios from "axios";

export const postFormData = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data)
        console.log(response.data);
    } catch (error) {
        throw error;
    }
}