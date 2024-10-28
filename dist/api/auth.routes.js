"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
const router = (0, express_1.Router)();
router.route("/sign-up").post(auth_controller_1.signUp);
router.route("/login").post(auth_controller_1.login);
router.route("/validate-user").get(authentication_middleware_1.default, auth_controller_1.validateUser);
exports.default = router;
