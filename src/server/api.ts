import axios from "axios";

export const api = axios.create({
    baseURL: "https://dsw-back-lkzo.onrender.com"
})