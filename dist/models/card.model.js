"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cardModel = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    description: {
        type: String,
        required: [true, "Title is required."]
    },
    list: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "list"
    },
    owner: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "user"
    },
    dueDate: {
        type: String,
    }
});
const Card = mongoose_1.default.model("card", cardModel);
exports.default = Card;
