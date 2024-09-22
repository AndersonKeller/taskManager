import TrashIcon from "@/assets/trash.svg";
import { taskController } from "@/controllers/task.controller";
import { iTask, taskStatus } from "@/schemas/task.schemas";
import { modalStore } from "@/stores/modal.store";
import { taskStore } from "@/stores/task.stores";
import Image from "next/image";

interface TaskItemProps {
  task: iTask;
  finished?: boolean;
}

export const TaskItem = ({ task, finished }: TaskItemProps) => {
  const { setOpenRemove } = modalStore();
  const { setToremove, setList, taskList, statusChange, setStatusChange } =
    taskStore();
  const { updateStatus, updateList } = taskController;

  const removeTask = () => {
    setOpenRemove(true);
    setToremove(task);
  };
  const update = () => {
    updateStatus(task);
    setList(taskList);
    setStatusChange(!statusChange);
    updateList(taskList);
  };
  return (
    <>
      <li className="w-full hover:bg-[#f7f9fd] hover:cursor-grab hover:border-transparent flex items-center justify-between border border-dashed border-[#d7dde9] rounded-lg p-4">
        <fieldset className="flex items-center gap-4">
          <input
            className="w-6 h-6"
            type="checkbox"
            checked={finished}
            readOnly={finished}
            onInput={update}
          />
          <p
            className={task.status === taskStatus.finish ? "line-through" : ""}
          >
            {task.name}
          </p>
        </fieldset>
        <button onClick={removeTask}>
          <Image src={TrashIcon} alt="remove task" />
        </button>
      </li>
    </>
  );
};
