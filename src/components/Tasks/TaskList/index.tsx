"use client";
import { taskController } from "@/controllers/task.controller";
import { TaskItem } from "../TaskItem";
import { useEffect } from "react";
import { taskStore } from "@/stores/task.stores";

export const TaskList = () => {
  const { init } = taskController;
  const { taskList } = taskStore();
  useEffect(() => {
    init();
  });
  return (
    <ul className="flex flex-col gap-6 items-center">
      <p>Suas tarefas de hoje</p>
      {taskList.length > 0 &&
        taskList.map((task) => {
          return <TaskItem task={task} key={task.name} />;
        })}
    </ul>
  );
};
