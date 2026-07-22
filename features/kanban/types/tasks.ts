export type Task = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  assignedId: string;
  dueDate: string;
};

export type TaskCreate = Omit<Task, "id">;