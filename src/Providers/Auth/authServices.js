import axios from "axios";

const API_URL = "/api/user";

export const registerUser = async (formData) => {
    const response = await axios.post(API_URL + "/register", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
}
export const loginUser = async (formData) => {
    const response = await axios.post(API_URL + "/login", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}


