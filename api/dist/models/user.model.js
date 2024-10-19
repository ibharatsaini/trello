"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: [true, "Password is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    tokens: {
        access_token: {
            type: String,
        },
        refresh_token: {
            type: String,
        }
    }
});
const User = mongoose_1.default.model("user", userModel);
exports.default = User;
