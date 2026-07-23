import { Task } from "../types/tasks";

export default function TaskCard({task, onSelect} : {task: Task, onSelect(task: Task) : void}) {
    return (
        <article className="w-3/4 rounded-xl border border-gray-400 pt-5 px-5 pb-2 hover:cursor-pointer hover:bg-gray-200" onClick={() => onSelect(task)}>
            <header className="flex justify-between">
                <h2 className="text-lg text-gray-800">
                    {task.title}
                </h2>
            </header>
            <main>
                <span>{task.priority} - {task.dueDate}</span>
            </main>
            <footer className="mt-4 text-right text-sm text-gray-400">
                Task -  #{task.id}
            </footer>
        </article>
    )
}