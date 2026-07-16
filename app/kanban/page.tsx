'use client';
import TaskBoard from "@/features/kanban/components/TaskBoard";
import TaskDetails from "@/features/kanban/components/TaskDetails";
import { useTasks } from "@/features/kanban/hooks/useTasks"
import { Task } from "@/features/kanban/types/tasks";
import { useState } from "react";

export default function Page() {
    const { tasks } = useTasks();
     const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
    }

    return (
        <div className="flex flex-col w-full">
            <h1 className="text-7xl">KANBAN PROJECT</h1>
            <span>Number of tasks : {tasks.length}</span>

            <TaskBoard tasks={tasks} onSelect={handleSelectTask} />

            {selectedTask && (
                <TaskDetails task={selectedTask} />
            )}

        </div>
    )
}