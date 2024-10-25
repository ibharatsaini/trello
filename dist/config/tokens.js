"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWTtoken = exports.sendToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
const JWT_EXPIRES = process.env.JWT_EXPIRES || "5d";
const environment = process.env.NODE_ENV;
const generateJWTtoken = function (userId) {
    return jsonwebtoken_1.default.sign({ _id: userId }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES,
    });
};
exports.generateJWTtoken = generateJWTtoken;
const sendToken = (user, res) => {
    const token = generateJWTtoken(user._id);
    const options = {
        httpOnly: true,
        maxAge: 1000 * 60 * 6000,
        sameSite: environment == 'production' ? 'none' : 'lax',
        secure: environment == 'production' ? true : false
    };
    if (user.password) {
        user = user.toObject();
        delete user.password;
    }
    res.cookie('token', token, options);
    // .json({
    //    success:true,
    //    data:user
    // })
};
exports.sendToken = sendToken;
