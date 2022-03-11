import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bruno-alvesbr.github.io/api-foods/server.json'
});