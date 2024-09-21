import { taskList } from "@/data/taskList";

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
};
