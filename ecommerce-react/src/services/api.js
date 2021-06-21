import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ecommerce-api-g5.herokuapp.com/'
});

export default api;