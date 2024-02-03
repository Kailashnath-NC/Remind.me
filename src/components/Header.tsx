"use client";
import Button from "./Button";

export default function Header() {
  function onAdd() {}

  function onDelete() {}
  return (
    <div className="bg-primary w-full px-6 py-4 text-lg flex justify-between">
      <div>Task List</div>
      <div className="flex gap-3">
        <Button handleClick={onAdd}>ADD</Button>
        <Button handleClick={onDelete}>DELETE</Button>
      </div>
    </div>
  );
}
