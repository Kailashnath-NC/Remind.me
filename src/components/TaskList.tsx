"use client";
import { useEffect, useRef, useState } from "react";
import Task from "./Task";

interface TaskType {
  id: string;
  title: string;
  description: string;
  hh: number;
  mm: number;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, []);
  return (
    <ul className="flex flex-col gap-1">
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
