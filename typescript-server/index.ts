import express, {Express, Request, Response } from "express";
import { isWeekend } from "./../date-fns/src/isWeekend";
import { getDay } from "./../date-fns/src/getDay";
import type { Day } from "./../date-fns/src/types.js";




const port = 8000;
const app: Express = express();
const format = [" Sunday", " Monday", " Tuesday", " Wednesday", " Thursday", " Friday", " Saturday"]

const date = new Date();
//const date = new Date("2024-01-02");
const days:Day[] = [0, 1]
const todayIsWeekend = isWeekend(date, {weekendDays:days})
//const todayIsWeekend = isWeekend(date)

app.get("/", (req: Request, res: Response) => {
    res.send(`Is ${format[getDay(date)]} weekend? <br>
    ${todayIsWeekend}`);
});

app.listen(port, () => {
    console.log(" Server rodando");
});