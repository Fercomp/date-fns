"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isLeapYear_1 = require("./../date-fns/src/isLeapYear");
const port = 8000;
const app = (0, express_1.default)();
const data = new Date('300-02-02');
app.get("/", (req, res) => {
    const result = (0, isLeapYear_1.isLeapYear)(data, true);
    res.send(`Is leap year? <br>
    ${result}`);
});
app.listen(port, () => {
    console.log("Server rodando");
});
