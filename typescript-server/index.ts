import express, {Express, Request, Response } from "express";
import { lastDayOfMonth } from "./../date-fns/src/lastDayOfMonth";
import { isLeapYear } from "./../date-fns/src/isLeapYear";
const data = new Date()
const port = 8000;

const app: Express = express();
const day = lastDayOfMonth(data).getDate()

app.get("/", (req: Request, res: Response) => {
    res.send(`Is leap year: ${isLeapYear(new Date(100, 9, 1))}`);
});

app.listen(port, () => {
    console.log(" Server rodando 1");
});