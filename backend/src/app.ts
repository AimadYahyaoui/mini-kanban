import express, {type Express, type Request, type Response} from "express";
import { tasksMock } from "./data/tasks.js";
import type { Task, TaskCreate } from "./types/tasks.js";

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({message : "API is running"});
});

app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasksMock)
})

app.post("/tasks", (req: Request, res: Response) => {
    console.log(req.body);
    const newTask: TaskCreate = {
        title: req.body.title.toString(),
        description: req.body.description.toString(),
        assignedId: "",
        dueDate: req.body.dueDate,
        priority: "low",
        status: "todo"
    }
    const task: Task = {id: crypto.randomUUID(),...newTask}
    tasksMock.push(task)
    // res.send(task)
    res.status(200).json(task)
})

export default app;