import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
  ? process.env.API_URL 
  : 'https://localhost:8080';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
