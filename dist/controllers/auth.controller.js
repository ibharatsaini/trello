"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.login = exports.signUp = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const tokens_1 = require("../config/tokens");
const board_model_1 = __importDefault(require("../models/board.model"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, firstName, lastName, password, confirmPassword } = req.body;
        console.log(email);
        if (password !== confirmPassword)
            throw new Error(`Passwords do not match.`);
        const user = yield (yield user_model_1.default.create({ email, firstName, lastName, password })).save();
        if (!user)
            throw new Error("User not created.");
        (0, tokens_1.sendToken)(user, res);
        res.status(200).json({
            data: user,
        });
        return;
    }
    catch (err) {
        res.status(401).json({
            message: `User Input invalid.`,
        });
        return;
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // console.log(email)
        // if (password !== confirmPassword)
        //   throw new Error(`Passwords do not match.`);
        const user = yield user_model_1.default.findOne({ email });
        if (!user)
            throw new Error("User not found.");
        const matched = yield user.comparePassword(password);
        if (!matched) {
            res.status(404).json({ success: false, error: "Incorrect Password" });
            return;
        }
        (0, tokens_1.sendToken)(user, res);
        const board = yield board_model_1.default.findOne({ owner: user._id });
        res.status(200).json({
            data: {
                user,
                board: board
            },
        });
        return;
    }
    catch (err) {
        res.status(401).json({
            message: `User Input invalid.`,
        });
        return;
    }
});
exports.login = login;
const validateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            data: req.user
        });
    }
    catch (e) {
        res.status(401).json({
            message: `User not authenticated`
        });
    }
});
exports.validateUser = validateUser;
