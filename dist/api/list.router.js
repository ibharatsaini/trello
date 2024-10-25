"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_controller_1 = require("../controllers/list.controller");
const router = (0, express_1.Router)();
// router.route('/all').post(createBoard)
router.route('/all').get(list_controller_1.getAllList);
router.route('/cards/:listId').get(list_controller_1.getCardsByList);
exports.default = router;
