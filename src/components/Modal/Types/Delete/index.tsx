import { Button } from "@/components/Button";
import { taskController } from "@/controllers/task.controller";
import { modalStore } from "@/stores/modal.store";
import { taskStore } from "@/stores/task.stores";

export const DeleteModal = () => {
  const { setOpenRemove } = modalStore();
  const { toRemove, setList, taskList } = taskStore();
  const { updateList } = taskController;
  const removeTask = () => {
    const findIndex = taskList.findIndex((task) => task.name === toRemove.name);
    const newList = taskList.toSpliced(findIndex, 1);
    setList(newList);
    updateList(newList);
    setOpenRemove(false);
  };
  return (
    <>
      <p className="font-medium text-2xl">Deletar Tarefa</p>
      <p>Tem certeza que cocê deseja deletar essa tarefa?</p>
      <div className="flex justify-between gap-8">
        <Button
          onClick={() => setOpenRemove(false)}
          priority="secondary"
          label="Cancelar"
        />
        <Button onClick={removeTask} priority="remove" label="Deletar" />
      </div>
    </>
  );
};
