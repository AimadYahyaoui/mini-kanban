'use client';
import TaskBoard from "@/features/kanban/components/TaskBoard";
import TaskDetails from "@/features/kanban/components/TaskDetails";
import TaskEditForm from "@/features/kanban/components/TaskEditForm";
import { useTasks } from "@/features/kanban/hooks/useTasks"
import { Task } from "@/features/kanban/types/tasks";
import { useState } from "react";

export type Mode = 'create' | 'edit' | 'detail' | 'none';

export default function Page() {
    const { tasks, selectedTask, setSelectedTask, update } = useTasks();
    const [mode, setMode] = useState<Mode>('none');

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
        setMode('detail');
    }

    const handleUpdateTask = async (task: Task) => {
        await update(task);
        setMode('detail');
    }

    const renderSidePanel = () => {
        if (selectedTask) {
            switch (mode) {
                case "detail":
                    return <TaskDetails task={selectedTask} onEdit={() => setMode('edit')} />
                case 'edit':
                    return <TaskEditForm task={selectedTask} onCancel={() => setMode('detail')} onSave={handleUpdateTask} />
                case 'create':
                    return <span>CREATE MODE</span>
                default:
                    return <></>;
            }
        }
    }
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-7xl">KANBAN PROJECT</h1>
            <span>Number of tasks : {tasks.length}</span>
            <div className="flex w-full justify-evenly gap-2 px-2">
                <div className="flex w-2/3">
                    <TaskBoard tasks={tasks} onSelect={handleSelectTask} />
                </div>
                {selectedTask && (
                    <div className="flex w-1/3 pt-8">
                        {renderSidePanel()}
                    </div>
                )}
            </div>

        </div>
    )
}