import express, {Express, Request, Response } from "express";
import { lastDayOfMonth } from "./../date-fns/src/lastDayOfMonth";
import { isLeapYear } from "./../date-fns/src/isLeapYear";
const data = new Date('300-07-01')
const port = 8000;

const app: Express = express();
const day = lastDayOfMonth(data).getDate()
const considerGregorian = true 

app.get("/", (req: Request, res: Response) => {
    const result = isLeapYear(data);
    res.send(`Is leap year: ${result}`);
});

app.listen(port, () => {
    console.log("Server rodando ...3");
});

function sleep(data: Date) {
    const year = data.getFullYear();

    if (year < 1582) {
        return year % 4 === 0;
    }
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}