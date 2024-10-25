"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const boardModel = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    lists: [{
            type: mongoose_1.default.Schema.ObjectId,
            ref: "list"
        }],
    owner: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "user"
    },
    members: [{
            type: mongoose_1.default.Schema.ObjectId,
            ref: "user"
        }],
    description: {
        type: String
    }
});
const Board = mongoose_1.default.model("board", boardModel);
exports.default = Board;
