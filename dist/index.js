"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var hello_1 = require("./hello");
var app = express_1.default();
app.get("/", hello_1.hello);
app.listen(3333);
