import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.DEV_URL
});

export {axiosInstance};