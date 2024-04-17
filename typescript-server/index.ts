import express, {Express, Request, Response } from "express";
import { lastDayOfMonth } from "./../date-fns/src/lastDayOfMonth";
const data = new Date()
const port = 8000;

const app: Express = express();
const day = lastDayOfMonth(data).getDate()

app.get("/", (req: Request, res: Response) => {
    res.send(`Last day of month ${day}`);
});

app.listen(port, () => {
    console.log(" Server rodando ");
});