import { useState } from "react";
import { Task } from "../types/tasks";

const tasksMock: Task[] = [
    {
        id: "1",
        title: "Setup project",
        description: "Initialize Next.js app",
        status: "todo",
        priority: "high",
        assignedId: "",
        dueDate: "2026-07-10"
    },
    {
        id: "2",
        title: "Create layout",
        description: "Build base UI structure",
        status: "in_progress",
        priority: "medium",
        assignedId: "",
        dueDate: "2026-07-12"
    },
    {
        id: "3",
        title: "Fix bugs",
        description: "Resolve UI issues",
        status: "done",
        priority: "low",
        assignedId: "",
        dueDate: "2026-07-01"
    },
    {
        id: "4",
        title: "Add TaskCard component",
        description: "Create reusable card UI",
        status: "todo",
        priority: "medium",
        assignedId: "",
        dueDate: "2026-07-15"
    }
]

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(tasksMock);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const update = async (task: Task) => {
        await setTasks(prev => 
            prev.map(t => t.id === task.id ? task : t)
        )
        setSelectedTask(task);
    }
    return {
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        update
    };
}