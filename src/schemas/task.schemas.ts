import { z } from "zod";
export enum taskStatus {
  pending = "pending",
  finish = "finish",
}
export const taskSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(taskStatus).default(taskStatus.pending),
});

export type iTask = z.infer<typeof taskSchema>;
