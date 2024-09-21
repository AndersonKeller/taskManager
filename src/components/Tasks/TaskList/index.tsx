import { TaskItem } from "../TaskItem";

export const TaskList = () => {
  return (
    <ul className="flex flex-col gap-6 items-center">
      <p>Suas tarefas de hoje</p>
      <TaskItem />
    </ul>
  );
};
