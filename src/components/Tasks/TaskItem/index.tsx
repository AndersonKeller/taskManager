import TrashIcon from "@/assets/trash.svg";
import { Modal } from "@/components/Modal";
import { iTask, taskStatus } from "@/schemas/task.schemas";
import { modalStore } from "@/stores/modal.store";
import Image from "next/image";

interface TaskItemProps {
  task: iTask;
  finished?: boolean;
}

export const TaskItem = ({ task, finished }: TaskItemProps) => {
  const { setOpenRemove } = modalStore();
  const removeTask = () => {
    setOpenRemove(true);
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
