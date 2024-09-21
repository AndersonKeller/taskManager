import { iTask, taskStatus } from "@/schemas/task.schemas";

export const taskList: iTask[] = [
  { name: "Lavar as mãos", status: taskStatus.pending },
  { name: "Fazer um bolo", status: taskStatus.pending },
  { name: "Lavar a louça", status: taskStatus.pending },
  { name: "Levar o lixo para fora", status: taskStatus.finish },
];
