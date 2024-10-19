"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 8080;
app_1.default.listen(PORT, () => {
    console.log(`Express Server started on port: `, PORT);
    (0, database_1.default)();
});
exports.default = app_1.default;
