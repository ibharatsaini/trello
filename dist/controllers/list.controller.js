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
exports.createList = exports.getCardsByList = exports.getAllList = void 0;
const list_model_1 = __importDefault(require("../models/list.model"));
const board_model_1 = __importDefault(require("../models/board.model"));
const getAllList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { boardId } = req.params;
        const list = yield list_model_1.default.find({ owner: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id, board: boardId });
        res.status(200).json({
            data: list,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No List found`,
        });
    }
});
exports.getAllList = getAllList;
const getCardsByList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listId } = req.params;
        const cards = yield list_model_1.default.findById(listId)
            .select("cards")
            .populate("cards", "title description owner");
        // console.log(cards)
        res.status(200).json({
            data: cards,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No list found`,
        });
    }
});
exports.getCardsByList = getCardsByList;
const createList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d;
    try {
        const { boardId } = req.params;
        const { title } = req.body;
        const boardOwner = yield board_model_1.default.findOne({
            owner: (_b = req.user) === null || _b === void 0 ? void 0 : _b._id,
            _id: boardId,
        });
        const boardMemeber = yield board_model_1.default.findOne({
            members: (_c = req.user) === null || _c === void 0 ? void 0 : _c._id,
            _id: boardId,
        });
        if (!boardOwner && !boardMemeber) {
            res.status(404).json({
                message: `Board not found.`,
            });
        }
        const list = yield (yield list_model_1.default.create({ title, owner: (_d = req.user) === null || _d === void 0 ? void 0 : _d._id, board: boardId })).save();
        res.status(200).json({
            data: list,
        });
    }
    catch (e) {
        res.status(404).json({
            message: `No list created.`,
        });
    }
});
exports.createList = createList;
