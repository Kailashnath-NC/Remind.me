"use client";
import TaskDetails from "@/components/TaskDetails";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 } from "uuid";

interface FormData {
  id: string;
  title: string;
  description: string;
  hh?: number;
  mm?: number;
}

export default function AddTask() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormData>({
    id: v4(),
    title: "",
    description: "",
    hh: 0,
    mm: 0,
  });

  function handleAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([formState]));
    } else {
      const allTasks = JSON.parse(localStorage.getItem("tasks")!);
      localStorage.setItem("tasks", JSON.stringify([...allTasks, formState]));
    }
    router.back();
  }

  return (
    <TaskDetails
      handleSubmit={handleAdd}
      formData={formState}
      updateFormData={(data: FormData) => setFormState(data)}
    >
      Add new task
    </TaskDetails>
  );
}
