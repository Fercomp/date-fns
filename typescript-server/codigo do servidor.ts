import express, {Express, Request, Response } from "express";
import { isWeekend } from "./../date-fns/src/isWeekend";
import type { WeekOptions, Day } from "./../date-fns/src/types.js";



const data = new Date()
const port = 8000;

const app: Express = express();
const days:Day[] = [1,5,6]
const todayIsWeekend = isWeekend(data, {weekendDays:days})

app.get("/", (req: Request, res: Response) => {
    res.send(`today is weekend ${todayIsWeekend}`);
});

app.listen(port, () => {
    console.log(" Server rodando ");
});
