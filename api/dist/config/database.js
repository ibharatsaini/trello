"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DATABASE_URL = process.env.DATABASE_URL;
const database = () => {
    if (!DATABASE_URL)
        throw new Error(`Database URL is required.`);
    mongoose_1.default.connect(DATABASE_URL, {
    // useUnifiedTopology:true,
    // useNewUrlParser:true
    })
        .then(data => console.log(`Database started at:- ${data.connection.host}`))
        .catch(e => console.log(e));
};
exports.default = database;
