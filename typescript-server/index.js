"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isWeekend_1 = require("./../date-fns/src/isWeekend");
const data = new Date("2024-03-25");
//const data = new Date();
const port = 8000;
const app = (0, express_1.default)();
const days = [1, 2, 5, 6];
const todayIsWeekend = (0, isWeekend_1.isWeekend)(data, { weekendDays: days });
app.get("/", (req, res) => {
    res.send(`${data} is weekend ${todayIsWeekend}`);
});
app.listen(port, () => {
    console.log(" Server rodando");
});
