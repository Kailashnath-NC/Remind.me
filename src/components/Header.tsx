"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Header() {
  const router = useRouter();
  function onAdd() {
    router.push("/add-task");
  }

  function onDelete() {
    router.push("/delete-task");
  }

  return (
    <div className="bg-primary w-full px-6 py-4 text-lg flex justify-between">
      <div>Your Tasks</div>
      <div className="flex gap-3">
        <Button handleClick={onAdd}>ADD</Button>
        <Button handleClick={onDelete}>DELETE</Button>
      </div>
    </div>
  );
}
