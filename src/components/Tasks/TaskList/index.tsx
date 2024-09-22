"use client";
import { taskController } from "@/controllers/task.controller";
import { TaskItem } from "../TaskItem";
import { useEffect, useState } from "react";
import { taskStore } from "@/stores/task.stores";
import { iTask, taskStatus } from "@/schemas/task.schemas";
import { Modal } from "@/components/Modal";
import { modalStore } from "@/stores/modal.store";

export const TaskList = () => {
  const { openModalRemove } = modalStore();
  const [pendings, setPendings] = useState([] as iTask[]);
  const [finished, setFinished] = useState([] as iTask[]);
  const { init } = taskController;
  const { taskList, statusChange } = taskStore();
  useEffect(() => {
    init();
    setFinished(taskList.filter((task) => task.status === taskStatus.finish));
    setPendings(taskList.filter((task) => task.status === taskStatus.pending));
  }, [taskList, statusChange]);
  return (
    <>
      <ul className="flex flex-col gap-6 items-center">
        <p>Suas tarefas de hoje</p>
        {pendings.length > 0 &&
          pendings.map((task) => {
            return <TaskItem task={task} key={task.name} />;
          })}
      </ul>
      <ul className="flex flex-col gap-6 items-center">
        <p>Tarefas finalizadas</p>
        {finished.length > 0 &&
          finished.map((task) => {
            return <TaskItem finished={true} task={task} key={task.name} />;
          })}
      </ul>
      {openModalRemove && <Modal type="delete" />}
    </>
  );
};
