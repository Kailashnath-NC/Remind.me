import Task from "./Task";

export default function TaskList() {
  return (
    <div className="overflow-auto flex flex-col gap-1">
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
