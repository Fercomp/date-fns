import express, {Express, Request, Response } from "express";
import { lastDayOfMonth } from "./../date-fns/src/lastDayOfMonth";
import { isLeapYear } from "./../date-fns/src/isLeapYear";
const data = new Date('300-07-01')
const port = 8000;

const app: Express = express();
const day = lastDayOfMonth(data).getDate()
const considerGregorian = true 

app.get("/", (req: Request, res: Response) => {
    const result = isLeapYear(data, true);
    res.send(`Is leap year: ${result}`);
});

app.listen(port, () => {
    console.log("Server rodando ...3");
});