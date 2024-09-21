import TrashIcon from "@/assets/trash.svg";
import Image from "next/image";
export const TaskItem = () => {
  return (
    <li className="w-full hover:bg-[#f7f9fd] hover:cursor-grab hover:border-hidden flex items-center justify-between border border-dashed border-[#d7dde9] rounded-lg p-4">
      <fieldset className="flex items-center gap-4">
        <input className="w-6 h-6" type="checkbox" />
        <p>Lavar as mãos</p>
      </fieldset>
      <Image src={TrashIcon} alt="remove task" />
    </li>
  );
};
