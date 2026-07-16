import { Task } from "../types/tasks";
import TaskCard from "./TaskCard";

export default function TaskColumn({ title, tasks, onSelect }: { title: string, tasks: Task[], onSelect(task: Task) : void }) {
    return (
        <div className="flex flex-col items-center self-start justify-items-start w-1/3 gap-5 border border-gray-500 rounded-xl py-5 h-full">
            <span>{title} ({tasks.length})</span>
            <div className="flex flex-col items-center justify-items-start gap-3 w-full">
                {tasks && tasks.map((task) =>
                    <TaskCard key={task.id} task={task} onSelect={onSelect}/>
                )}
            </div>
        </div>
    )
}