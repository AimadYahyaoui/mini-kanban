import { useEffect, useState } from "react";
import { Task } from "../types/tasks";

const tasksMock: Task[] = [
    {
        id: "1",
        title: "Setup project",
        description: "Initialize Next.js app",
        status: "todo",
        priority: "high",
        assigneeId: null,
        dueDate: "2026-07-10"
    },
    {
        id: "2",
        title: "Create layout",
        description: "Build base UI structure",
        status: "in_progress",
        priority: "medium",
        assigneeId: null,
        dueDate: "2026-07-12"
    },
    {
        id: "3",
        title: "Fix bugs",
        description: "Resolve UI issues",
        status: "done",
        priority: "low",
        assigneeId: null,
        dueDate: "2026-07-01"
    },
    {
        id: "4",
        title: "Add TaskCard component",
        description: "Create reusable card UI",
        status: "todo",
        priority: "medium",
        assigneeId: null,
        dueDate: "2026-07-15"
    }
]

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(tasksMock);
   
    return {
        tasks,
        setTasks
    };
}