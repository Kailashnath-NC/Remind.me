"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTask() {
  const router = useRouter();
  const [formState, setFormState] = useState<{
    title?: string;
    description?: string;
    hh?: number;
    mm?: number;
  }>({});
  function handleCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.back();
  }

  function handleConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log("Added");
  }

  return (
    <div className="w-full  bg-primary py-6 px-3 text-dark flex flex-col justify-between">
      <h1 className="text-center text-xl font-medium">Add new task</h1>
      <form className="space-y-3">
        <div>
          <label htmlFor="title" className="block">
            Task Title
          </label>
          <input
            type="text"
            placeholder="Web Dev"
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
            value={formState.title}
            id="title"
            className="w-full px-2 py-2 bg-transparent border-dark border-b outline-none placeholder:text-default text-inputColor"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Task Decription
          </label>
          <input
            type="text"
            placeholder="Learn Next.js ..."
            onChange={(e) => {
              setFormState({ ...formState, description: e.target.value });
            }}
            value={formState?.description}
            id="description"
            className="w-full px-2 py-2 bg-transparent border-dark border-b outline-none placeholder:text-default text-inputColor"
          />
        </div>
        <div>
          <label htmlFor="duration" className="block">
            Task Duration
          </label>
          <div className="flex gap-2 [&>*]:ps-2 [&>*]:py-1">
            <input
              type="text"
              placeholder="hh"
              pattern="^[0-9]*$"
              size={1}
              maxLength={2}
              onChange={(e) => {
                let hString = e.target.value.replace(/\D/g, "");
                let hours = Number(hString);
                setFormState({ ...formState, hh: hours });
              }}
              value={formState?.hh}
              className="bg-transparent border-dark border-b outline-none placeholder:text-default text-inputColor"
            />
            :
            <input
              type="text"
              placeholder="mm"
              size={1}
              maxLength={2}
              onChange={(e) => {
                let mString = e.target.value.replace(/\D/g, "");
                let minutes = Number(mString);
                setFormState({ ...formState, mm: minutes });
              }}
              value={formState.mm}
              className="bg-transparent border-dark border-b outline-none placeholder:text-default text-inputColor"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-evenly text-lg">
          <Button handleClick={(e) => handleConfirm(e)}>Confirm</Button>
          <Button handleClick={(e) => handleCancel(e)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
