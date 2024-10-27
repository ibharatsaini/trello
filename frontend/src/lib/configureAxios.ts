import axios from 'axios';

// Check if running in production or development
const {VITE_API_BASE_URL, VITE_NODE_ENV} = import.meta.env
const BASE_URL =  VITE_NODE_ENV == 'production' ?  VITE_API_BASE_URL : 'http://localhost:8080/' 
// const API_BASE_URL = 'http://localhost:8080/'
console.log(BASE_URL  )
console.log(import.meta.env)
// Axios instance configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL , 
  withCredentials: true
});

axiosInstance.defaults.withCredentials = true

export default axiosInstance;
