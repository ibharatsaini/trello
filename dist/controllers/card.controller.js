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
exports.createCard = exports.updateFields = exports.getCardById = exports.getAllCards = void 0;
const card_model_1 = __importDefault(require("../models/card.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const list_model_1 = __importDefault(require("../models/list.model"));
const getAllCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const card = yield card_model_1.default.find()
            .populate("list", "title")
            .populate("owner", "email firstName lastName");
        res.status(200).json({
            data: card,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No Card found`,
        });
    }
});
exports.getAllCards = getAllCards;
const getCardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const card = yield card_model_1.default.findById(req.params.id)
            .populate("list", "title")
            .populate("owner", "email firstName lastName");
        res.status(200).json({
            data: card,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No Card found`,
        });
    }
});
exports.getCardById = getCardById;
const updateFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, dueDate } = req.body;
        const { cardId } = req.params;
        const card = yield card_model_1.default.updateOne({ _id: cardId }, { title, description, dueDate });
        res.status(200).json({
            data: card,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `No field updated`,
        });
    }
});
exports.updateFields = updateFields;
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title } = req.body;
        const { listId } = req.params;
        const card = yield (yield card_model_1.default.create({
            list: new mongoose_1.default.Types.ObjectId(listId),
            title,
            owner: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
        })).save();
        const list = yield list_model_1.default.findByIdAndUpdate(listId, {
            $push: { cards: card._id },
        });
        if (!list || !card)
            throw new Error(`Card not created.`);
        res.status(200).json({
            data: card,
        });
        return;
    }
    catch (e) {
        res.status(404).json({
            message: `Card not created`,
        });
    }
});
exports.createCard = createCard;
