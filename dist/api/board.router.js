"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const board_controller_1 = require("../controllers/board.controller");
const authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
const router = (0, express_1.Router)();
router.route('/create').post(authentication_middleware_1.default, board_controller_1.createBoard);
router.route('/all').get(authentication_middleware_1.default, board_controller_1.getAllBoard);
router.route('/get-board').get(authentication_middleware_1.default, board_controller_1.getBoard);
router.route('/:id').get(authentication_middleware_1.default, board_controller_1.getBoardById);
exports.default = router;
