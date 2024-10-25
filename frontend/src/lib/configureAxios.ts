import axios from 'axios';

// Check if running in production or development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
// const API_BASE_URL = 'http://localhost:8080/'
const cookies = document.cookie
console.log(cookies)
// Axios instance configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL, 
  withCredentials: true
});

axiosInstance.defaults.withCredentials = true

export default axiosInstance;
