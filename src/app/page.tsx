import Header from "@/components/Header";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div className="w-app-lg flex flex-col">
      <Header />
      <TaskList />
    </div>
  );
}
