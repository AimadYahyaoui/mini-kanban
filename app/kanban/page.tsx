'use client';
import TaskBoard from "@/features/kanban/components/TaskBoard";
import TaskDetails from "@/features/kanban/components/TaskDetails";
import TaskEditForm from "@/features/kanban/components/TaskEditForm";
import { useTasks } from "@/features/kanban/hooks/useTasks"
import { Task } from "@/features/kanban/types/tasks";
import { useState } from "react";

export type Mode = 'create' | 'edit' | 'detail' | 'none';

export default function Page() {
    const { tasks, selectedTask, setSelectedTask } = useTasks();
    const [mode, setMode] = useState<Mode>('none');

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
        setMode('detail');
    }

    return (
        <div className="flex flex-col w-full min-h-dvh">
            <h1 className="text-7xl">KANBAN PROJECT</h1>
            <span>Number of tasks : {tasks.length}</span>
            <div className="flex w-full justify-evenly gap-2 px-2">
                <div className="flex w-2/3">
                    <TaskBoard tasks={tasks} onSelect={handleSelectTask} />
                </div>
                <div className="flex w-1/3 pt-8">
                    
                    {(selectedTask && mode === 'detail') && (
                        <TaskDetails task={selectedTask} onEdit={() => setMode('edit')} />
                    )}

                    {(selectedTask && mode === 'edit') && (
                        <TaskEditForm task={selectedTask} />
                    )}
                </div>
            </div>

        </div>
    )
}