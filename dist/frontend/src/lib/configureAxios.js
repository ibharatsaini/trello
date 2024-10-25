"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Check if running in production or development
const API_BASE_URL = import.meta.env.API_BASE_URL;
// Axios instance configuration
const axiosInstance = axios_1.default.create({
    baseURL: API_BASE_URL, // Base URL from the environment variable
    //   proxy: {
    //     host: isDevelopment ? 'localhost' : 'your-production-proxy.com',
    //     port: isDevelopment ? 3000 : 443,
    //     protocol: isDevelopment ? 'http' : 'https',
    //   },
});
exports.default = axiosInstance;
