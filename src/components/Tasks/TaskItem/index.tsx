import TrashIcon from "@/assets/trash.svg";
import { iTask, taskStatus } from "@/schemas/task.schemas";
import Image from "next/image";

interface TaskItemProps {
  task: iTask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li className="w-full hover:bg-[#f7f9fd] hover:cursor-grab hover:border-transparent flex items-center justify-between border border-dashed border-[#d7dde9] rounded-lg p-4">
      <fieldset className="flex items-center gap-4">
        <input
          className="w-6 h-6"
          type="checkbox"
          checked={task.status === taskStatus.finish}
          readOnly={task.status === taskStatus.finish}
        />
        <p className={task.status === taskStatus.finish ? "line-through" : ""}>
          {task.name}
        </p>
      </fieldset>
      <Image src={TrashIcon} alt="remove task" />
    </li>
  );
};
