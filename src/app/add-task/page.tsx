"use client";
import TaskDetails from "@/components/TaskDetails";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 } from "uuid";

interface FormData {
  title?: string;
  description?: string;
  hh?: number;
  mm?: number;
}

export default function AddTask() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormData>({
    title: "",
    description: "",
    hh: 0,
    mm: 0,
  });

  function handleAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let dataString = JSON.stringify(formState);
    localStorage.setItem(v4(), dataString);
    console.log("Added");
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
