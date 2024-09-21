"use client";
import { Button } from "@/components/Button";
import { TaskList } from "@/components/Tasks/TaskList";

export default function Home() {
  const newTask = () => {
    console.log("newtask");
  };
  return (
    <div className="flex flex-col gap-6 w-full max-w-[450px] m-auto">
      <section className="max-h-[465px]  overflow-y-auto  flex flex-col gap-6 w-full rounded-2xl border-[#eaecf0] border px-4 sm:px-8 py-8">
        <TaskList />
      </section>
      <Button label="Adiconar nova tarefa" onClick={newTask} />
    </div>
  );
}
