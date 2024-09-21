import { create } from "zustand";
interface ModalStore {
  openModalRemove: boolean;
  setOpenRemove: (val: boolean) => void;
  openModalCreate: boolean;
  setOpenCreate: (val: boolean) => void;
}

export const modalStore = create<ModalStore>((set) => ({
  openModalRemove: false,
  setOpenRemove: (value: boolean) => set({ openModalRemove: value }),
  openModalCreate: false,
  setOpenCreate: (value: boolean) => set({ openModalCreate: value }),
}));
