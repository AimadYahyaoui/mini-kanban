'use client';
import TaskBoard from "@/features/kanban/components/TaskBoard";
import TaskCreateForm from "@/features/kanban/components/TaskCreateForm";
import TaskDetails from "@/features/kanban/components/TaskDetails";
import TaskEditForm from "@/features/kanban/components/TaskEditForm";
import { useTasks } from "@/features/kanban/hooks/useTasks"
import { Task, TaskCreate } from "@/features/kanban/types/tasks";
import { useState } from "react";

export type Mode = 'create' | 'edit' | 'detail' | 'none';

export default function Page() {
    const { tasks, selectedTask, setSelectedTask, update, create } = useTasks();
    const [mode, setMode] = useState<Mode>('none');

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
        setMode('detail');
    }

    const handleUpdateTask = async (task: Task) => {
        await update(task);
        setMode('detail');
    }

    const handleCreateTask = async (task: TaskCreate) => {
        await create(task);
        setMode("detail");
    }

    const renderSidePanel = () => {
        switch (mode) {
            case "detail":
                if (selectedTask) {
                    return <TaskDetails task={selectedTask} onEdit={() => setMode('edit')} />
                }
            case 'edit':
                if (selectedTask) {
                    return <TaskEditForm task={selectedTask} onCancel={() => setMode('detail')} onSave={handleUpdateTask} />
                }
            case 'create':
                return <TaskCreateForm onCancel={() => setMode("none")} onSave={handleCreateTask} />
            default:
                return <></>;
        }
    }
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-7xl">KANBAN PROJECT</h1>
            <div className="flex w-2/3 justify-between px-2">
                <span>Number of tasks : {tasks.length}</span>
                <button type="button" onClick={() => setMode("create")} className=" px-5 border border-green-700 bg-green-100 rounded-2xl text-green-600 cursor-pointer">Create</button>
            </div>
            <div className="flex w-full justify-evenly gap-2 px-2">
                <div className="flex w-2/3">
                    <TaskBoard tasks={tasks} onSelect={handleSelectTask} />
                </div> <div className="flex w-1/3 pt-8">
                    {renderSidePanel()}
                </div>
            </div>

        </div>
    )
}