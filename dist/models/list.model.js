"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const listModel = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
    },
    cards: [
        {
            type: mongoose_1.default.Schema.ObjectId,
            ref: "card",
        },
    ],
    owner: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "user",
    },
    board: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "board",
    },
    order: [
        {
            // taskId: {
            type: mongoose_1.default.Schema.ObjectId,
            ref: "task",
            // },
        },
    ],
});
const List = mongoose_1.default.model("list", listModel);
exports.default = List;
