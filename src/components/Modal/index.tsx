import { CreateModal } from "./Types/Create";
import { DeleteModal } from "./Types/Delete";

interface ModalProps {
  type: "delete" | "create";
}
export const Modal = ({ type }: ModalProps) => {
  return (
    <div className="fixed flex items-center justify-center h-screen w-full top-0 left-0 bg-[#ffffffcc]">
      <div className="modal flex flex-col gap-8 p-8 rounded-2xl shadow-2xl bg-white w-11/12 max-w-[450px]">
        {type === "create" ? <CreateModal /> : <DeleteModal />}
      </div>
    </div>
  );
};
