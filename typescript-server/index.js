"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isWeekend_1 = require("./../date-fns/src/isWeekend");
const getDay_1 = require("./../date-fns/src/getDay");
const port = 8000;
const app = (0, express_1.default)();
const format = [" Sunday", " Monday", " Tuesday", " Wednesday", " Thursday", " Friday", " Saturday"];
const date = new Date();
//const date = new Date("2024-01-02");
const days = [0, 1];
const todayIsWeekend = (0, isWeekend_1.isWeekend)(date, { weekendDays: days });
//const todayIsWeekend = isWeekend(date)
app.get("/", (req, res) => {
    res.send(`Is ${format[(0, getDay_1.getDay)(date)]} weekend? <br>
    ${todayIsWeekend}`);
});
app.listen(port, () => {
    console.log(" Server rodando");
});
