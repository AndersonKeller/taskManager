import { Button } from "@/components/Button";
import { modalStore } from "@/stores/modal.store";

export const DeleteModal = () => {
  const { setOpenRemove } = modalStore();
  return (
    <>
      <p>Deletar Tarefa</p>
      <p>Tem certeza que cocê deseja deletar essa tarefa?</p>
      <div className="flex justify-between gap-8">
        <Button
          onClick={() => setOpenRemove(false)}
          priority="secondary"
          label="Cancelar"
        />
        <Button priority="remove" label="Deletar" />
      </div>
    </>
  );
};
