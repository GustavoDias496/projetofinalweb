import axios from "axios"

const api = axios.create({
    baseURL: "https://backendprojetoweb.herokuapp.com",
});

export default api;