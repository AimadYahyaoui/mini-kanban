import { useState } from "react";
import { TaskCreate } from "../types/tasks";

export default function TaskCreateForm({ onCancel, onSave }: { onCancel(): void, onSave(task: TaskCreate): void }) {
    const [taskCreate, setTaskCreate] = useState<TaskCreate>({
        title: "",
        description: "",
        priority: 'low',
        status: 'todo',
        assignedId: "",
        dueDate: ''
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { id, value } = event.target;
        setTaskCreate((prev) => ({
            ...prev,
            [id]: value
        }));
    }

    return <div className="flex flex-col gap-1 w-full border border-slate-300 p-2 rounded-lg">
        <div className="pb-3">
            <h2 className="text-lg font-semibold text-slate-900">
                Create new task #
            </h2>
        </div>

        <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                Title
            </label>
            <input
                id="title"
                type="text"
                value={taskCreate.title}
                onChange={handleChange}
                placeholder="Ex: Préparer la démo client"
                className="w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border-slate-300" />
        </div>

        <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                Description
            </label>
            <textarea
                id="description"
                value={taskCreate.description}
                onChange={handleChange}
                rows={4}
                placeholder="Détails de la tâche..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">
                    Status
                </label>
                <select
                    id="status"
                    value={taskCreate.status}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="todo">
                        Todo
                    </option>
                    <option value="in_progress">
                        In progress
                    </option>
                    <option value="done">
                        Done
                    </option>
                </select>
            </div>

            <div>
                <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-1">
                    Priority
                </label>
                <select
                    id="priority"
                    value={taskCreate.priority}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="low">
                        Low
                    </option>
                    <option value="medium">
                        Medium
                    </option>
                    <option value="high">
                        High
                    </option>
                </select>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="assignedId" className="block text-sm font-medium text-slate-700 mb-1">
                    Assigned to
                </label>
                <select
                    id="assignedId"
                    value={taskCreate.assignedId ?? ""}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">No assigned</option>
                </select>
            </div>

            <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-slate-700 mb-1">
                    Due
                </label>
                <input
                    id="dueDate"
                    type="date"
                    value={taskCreate.dueDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border-slate-300" />
            </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">

            <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 cursor-pointer text-sm font-medium text-slate-700 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                Cancel
            </button>
            <button
                type="button"
                className="px-4 py-2 cursor-pointer text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => onSave(taskCreate)}>
                Save
            </button>
        </div>
    </div>
}