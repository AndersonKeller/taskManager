import { Button } from "@/components/Button";
import { modalStore } from "@/stores/modal.store";

export const CreateModal = () => {
  const { setOpenCreate } = modalStore();
  return (
    <>
      <p>Nova Tarefa</p>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="">Título</label>
        <input
          className="pl-4 border rounded-lg h-12"
          type="text"
          placeholder="Digite"
        />
      </fieldset>
      <div className="flex justify-between gap-8">
        <Button
          onClick={() => setOpenCreate(false)}
          priority="secondary"
          label="Cancelar"
        />
        <Button priority="primary" label="Adicionar" />
      </div>
    </>
  );
};
