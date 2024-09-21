import { taskController } from "@/controllers/task.controller";
import { taskList } from "@/data/taskList";
import { iTask } from "@/schemas/task.schemas";
import { parseCookies } from "nookies";
import { create } from "zustand";
interface TaskStore {
  taskList: iTask[];
  setList: (list: iTask[]) => void;
}
const cookies = parseCookies();

export const taskStore = create<TaskStore>((set) => ({
  taskList: cookies["@taskList"] ? JSON.parse(cookies["@taskList"]) : taskList,
  setList: (list: iTask[]) =>
    set(() => ({
      taskList: list,
    })),
}));
