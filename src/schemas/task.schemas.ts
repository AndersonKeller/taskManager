import { z } from "zod";
export enum taskStatus {
  pending = "pending",
  finish = "finish",
}
export const taskSchema = z.object({
  name: z.string().min(1, "Preencha o nome da tarefa"),
  status: z.nativeEnum(taskStatus).default(taskStatus.pending),
});

export type iTask = z.infer<typeof taskSchema>;
