"use strict";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
const path_1 = __importDefault(require("path"));
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "./src"),
        },
    },
});
