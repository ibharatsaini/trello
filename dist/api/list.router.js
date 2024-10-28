"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_controller_1 = require("../controllers/list.controller");
const authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
const router = (0, express_1.Router)();
router.route('/create/:boardId').post(authentication_middleware_1.default, list_controller_1.createList);
router.route('/all/:boardId').get(authentication_middleware_1.default, list_controller_1.getAllList);
router.route('/cards/:listId').get(authentication_middleware_1.default, list_controller_1.getCardsByList);
exports.default = router;
