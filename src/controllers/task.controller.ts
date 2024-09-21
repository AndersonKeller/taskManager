import { taskList } from "@/data/taskList";
import { iTask, taskStatus } from "@/schemas/task.schemas";

import { parseCookies, setCookie } from "nookies";

export const taskController = {
  init: () => {
    const cookies = parseCookies();

    if (!cookies["@taskList"]) {
      setCookie(null, "@taskList", JSON.stringify(taskList), {
        maxAge: 24 * 60 * 60,
        path: "/",
      });
    }
  },
  updateList: (list: iTask[]) => {
    setCookie(null, "@taskList", JSON.stringify(list), {
      maxAge: 24 * 60 * 60,
      path: "/",
    });
  },
  updateStatus: (task: iTask) => {
    task.status = taskStatus.finish;
    return task;
  },
};
