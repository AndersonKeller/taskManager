import { Button } from "@/components/Button";
import { taskController } from "@/controllers/task.controller";
import { iTask, taskSchema } from "@/schemas/task.schemas";
import { modalStore } from "@/stores/modal.store";
import { taskStore } from "@/stores/task.stores";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const CreateModal = () => {
  const { setOpenCreate } = modalStore();
  const { taskList, setList } = taskStore();
  const { updateList } = taskController;
  const createTask = (data: iTask) => {
    updateList([...taskList, data]);
    setList([...taskList, data]);
    setOpenCreate(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTask>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
  });
  return (
    <>
      <p className="font-medium text-2xl">Nova Tarefa</p>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(createTask)}>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="">Título</label>
          <input
            {...register("name")}
            className="pl-4 border rounded-lg h-12"
            type="text"
            placeholder="Digite"
          />
          {errors.name && (
            <span className="text-red-500 lowercase">
              {errors.name.message}
            </span>
          )}
        </fieldset>
        <div className="flex justify-between gap-8">
          <Button
            onClick={() => setOpenCreate(false)}
            priority="secondary"
            label="Cancelar"
          />
          <Button priority="primary" type="submit" label="Adicionar" />
        </div>
      </form>
    </>
  );
};
