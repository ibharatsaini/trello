"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const card_controller_1 = require("../controllers/card.controller");
const authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
const router = (0, express_1.Router)();
// router.route('/create').post(createBoard)
router.route('/all').get(authentication_middleware_1.default, card_controller_1.getAllCards);
router.route('/:id').get(authentication_middleware_1.default, card_controller_1.getCardById);
router.route('/update/:cardId').post(authentication_middleware_1.default, card_controller_1.updateFields);
exports.default = router;
