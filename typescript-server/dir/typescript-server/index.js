"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lastDayOfMonth_1 = require("./../date-fns/src/lastDayOfMonth");
const data = new Date();
const port = 8000;
const app = (0, express_1.default)();
const day = (0, lastDayOfMonth_1.lastDayOfMonth)(data).getDate();
app.get("/", (req, res) => {
    res.send(`Last day of month ${day}`);
});
app.listen(port, () => {
    console.log(" Server rodando ");
});
