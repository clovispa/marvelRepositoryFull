import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://gateway.marvel.com'
});

export default apiClient
