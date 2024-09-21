import { TaskList } from "@/components/Tasks/TaskList";

export default function Home() {
  return (
    <section className="mx-auto my-auto w-full max-w-[450px] rounded-2xl border-[#eaecf0] border p-8">
      <TaskList />
    </section>
  );
}
