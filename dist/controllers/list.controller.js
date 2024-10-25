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
exports.getCardsByList = exports.getAllList = void 0;
const list_model_1 = __importDefault(require("../models/list.model"));
const getAllList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lists = yield list_model_1.default.find().populate("cards", "title description").populate("owner", "email firstName lastName");
        res.status(200).json({
            data: lists
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No List found`
        });
    }
});
exports.getAllList = getAllList;
const getCardsByList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listId } = req.params;
        const cards = yield list_model_1.default.findById(listId).select("cards").populate("cards", "title description owner");
        // console.log(cards)
        res.status(200).json({
            data: cards
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No list found`
        });
    }
});
exports.getCardsByList = getCardsByList;
