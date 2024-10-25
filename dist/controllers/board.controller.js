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
exports.getBoard = exports.createBoard = void 0;
const board_model_1 = __importDefault(require("../models/board.model"));
// const board = Board
const createBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, members } = req.body;
        if (!members || members.length == 0)
            members = null;
        const board = yield (yield board_model_1.default.create({ title, members })).save();
        if (!board)
            throw new Error(`Board not created`);
        res.status(201).json({
            data: board
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            message: `Board not created`
        });
    }
});
exports.createBoard = createBoard;
const getBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // console.log(id)
        const board = yield board_model_1.default.findById(id).populate("members", "email firstName lastName");
        // console.log('dddd')
        // console.log(board)
        res.status(200).json({
            data: board
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            message: `Couldn't get board.`
        });
    }
});
exports.getBoard = getBoard;
