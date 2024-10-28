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
exports.getAllBoard = exports.getBoard = exports.getBoardById = exports.createBoard = void 0;
const board_model_1 = __importDefault(require("../models/board.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
// const board = Board
const createBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { title, members } = req.body;
        if (!members || members.length == 0)
            members = null;
        const users = yield user_model_1.default.find({ email: { $in: members } });
        const memebersWithId = users.reduce((acc, user) => {
            if (user)
                acc.push(user._id);
            return acc;
        }, []);
        const board = yield (yield board_model_1.default.create({
            title,
            members: memebersWithId,
            owner: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
        })).save();
        if (!board)
            throw new Error(`Board not created`);
        res.status(201).json({
            data: board,
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            message: `Board not created`,
        });
    }
});
exports.createBoard = createBoard;
const getBoardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // console.log(id)
        const board = yield board_model_1.default.findById(id).populate("members", "email firstName lastName");
        // console.log('dddd')
        // console.log(board)
        res.status(200).json({
            data: board,
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            message: `Couldn't get board.`,
        });
    }
});
exports.getBoardById = getBoardById;
const getBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const board = yield board_model_1.default.findOne({ owner: (_b = req.user) === null || _b === void 0 ? void 0 : _b._id }).select("_id");
        res.status(200).json({
            data: board
        });
    }
    catch (e) {
        res.status(404).json({
            message: `No board found.`
        });
    }
});
exports.getBoard = getBoard;
const getAllBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        // console.log(req.user?._id)
        const board = yield board_model_1.default.find({ owner: (_c = req.user) === null || _c === void 0 ? void 0 : _c._id });
        // console.log(board)
        res.status(200).json({
            data: board
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No board found.`
        });
    }
});
exports.getAllBoard = getAllBoard;
