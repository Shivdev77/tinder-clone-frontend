import axios from "axios";
const instance = axios.create({
    baseURL : 'https://tinder-clone-api.onrender.com'
})

export default instance;
