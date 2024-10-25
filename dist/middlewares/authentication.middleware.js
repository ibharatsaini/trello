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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
function authenticateUser(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
            if (!token) {
                res.status(404).json({ success: false, error: "Token not found" });
                return;
            }
            const { _id } = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            // const user = await crudOperations(User).getById(_id)
            const user = yield user_model_1.default.findById({ _id });
            if (!user) {
                res.status(404).json({ success: false, error: "User not found" });
                return;
            }
            req.user = user;
            next();
        }
        catch (e) {
            res.status(404).json({
                message: `Failed to authenticate.`,
            });
        }
    });
}
exports.default = authenticateUser;
