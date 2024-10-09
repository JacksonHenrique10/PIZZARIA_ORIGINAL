import axios from "axios";

const api = axios.create({
    // baseURL: 'https://localhost:3333'
    baseURL: 'http://169.254.158.3:3333'
})

export {api};