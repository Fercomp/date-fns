import express, {Express, Request, Response } from "express";
import { isLeapYear } from "./../date-fns/src/isLeapYear";

const port = 8000;
const app: Express = express();

const data = new Date('300-02-02')

app.get("/", (req: Request, res: Response) => {
    const result = isLeapYear(data, true);
    res.send(`Is leap year? <br>
    ${result}`);
});

app.listen(port, () => {
    console.log("Server rodando");
});