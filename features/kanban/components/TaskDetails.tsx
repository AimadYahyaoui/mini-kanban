import { Task } from "../types/tasks";

export default function TaskDetails({task} : {task: Task}) {
    return (
        <article className="w-1/2 h-full rounded-xl border border-gray-300 p-6 self-center">
        <header className="mb-4 border-b pb-3 flex justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {task.title} - {task.priority.toUpperCase()}
          </h2>
          <button type="button" className=" px-5 border border-amber-500 bg-amber-100 rounded-2xl text-amber-600 cursor-pointer">Edit</button>
          
        </header>

        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-semibold">Status : {task.status}</span>
          </p>
          <p>
            <span className="font-semibold">Description :</span>{" "}
            <span className=" px-3 py-1 text-sm font-medium">
              {task.description}
            </span>
          </p>
          <p>
           <span className="font-semibold">Assigned to :</span>{" "}
            <span className=" px-3 py-1 text-sm font-medium">
              {task.assigneeId}
            </span>
          </p>
          <p>
            <span className="font-semibold">Due date to :</span>{" "}
            <span className=" px-3 py-1 text-sm font-medium">
              {task.dueDate}
            </span>
          </p>
        </div>

        <footer className="mt-4 text-right text-sm text-gray-400">
          Task #{task.id}
        </footer>
      </article>
    )
}