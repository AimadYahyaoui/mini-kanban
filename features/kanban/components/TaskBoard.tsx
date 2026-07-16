import { Task } from "../types/tasks";
import TaskColumn from "./TaskColumn";

export default function TaskBoard({ tasks, onSelect }: { tasks: Task[], onSelect(task: Task) : void }) {
    const tasksTodo = tasks.filter(task => task.status === 'todo');
    const tasksInProgress = tasks.filter(task => task.status === 'in_progress');
    const tasksDone = tasks.filter(task => task.status === 'done');

    return (
        <div className="flex flex-col w-3/4 h-full self-center">
            <h2 className="text-2xl">Task Board</h2>
            <div className="flex gap-5 items-center justify-between w-full px-6 py-5 h-full">
                <TaskColumn title="Todo" tasks={tasksTodo} onSelect={onSelect}/>
                <TaskColumn title="In Progress" tasks={tasksInProgress} onSelect={onSelect} />
                <TaskColumn title="Done" tasks={tasksDone} onSelect={onSelect}/>
            </div>
        </div>
    )
}