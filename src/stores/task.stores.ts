import { iTask } from "@/schemas/task.schemas";
import { parseCookies } from "nookies";
import { create } from "zustand";
interface TaskStore {
  taskList: iTask[];
  setList: (list: iTask[]) => void;
}
const cookies = parseCookies();
export const taskStore = create<TaskStore>((set) => ({
  taskList: cookies["@taskList"]
    ? JSON.parse(cookies["@taskList"])
    : ([] as iTask[]),
  setList: (list: iTask[]) =>
    set(() => ({
      taskList: list,
    })),
}));
