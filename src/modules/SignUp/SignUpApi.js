import axios from "axios";

export const postFormData = async(data) => {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, data)
    console.log(response.data);
}