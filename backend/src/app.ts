import express, {type Express, type Request, type Response} from "express";
import { tasksMock } from "./data/tasks.js";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.json({message : "API is running"});
});

app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasksMock)
})

export default app;