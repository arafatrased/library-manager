"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
//Middleware
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => {
    res.send("Welcome to Note App");
});
