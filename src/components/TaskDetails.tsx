import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "./Button";

interface FormData {
  title?: string;
  description?: string;
  hh?: number;
  mm?: number;
}

interface Props {
  children: React.ReactNode;
  handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void;
  formData: FormData;
  updateFormData(data: FormData): void;
}

export default function TaskDetails({
  children,
  handleSubmit,
  formData,
  updateFormData,
}: Readonly<Props>) {
  const router = useRouter();
  function handleCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.back();
  }

  return (
    <div className="w-full  bg-primary py-6 px-3 text-dark flex flex-col justify-between">
      <h1 className="text-center text-xl font-medium">{children}</h1>
      <form className="space-y-3" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="title" className="block">
            Task Title
          </label>
          <input
            type="text"
            placeholder="Web Dev"
            onChange={(e) => {
              updateFormData({ ...formData, title: e.target.value });
            }}
            value={formData.title}
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
              updateFormData({ ...formData, description: e.target.value });
            }}
            value={formData?.description}
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
                updateFormData({ ...formData, hh: hours });
              }}
              value={formData?.hh}
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
                updateFormData({ ...formData, mm: minutes });
              }}
              value={formData.mm}
              className="bg-transparent border-dark border-b outline-none placeholder:text-default text-inputColor"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-evenly text-lg">
          <Button handleClick={(e) => handleSubmit(e)}>Confirm</Button>
          <Button handleClick={(e) => handleCancel(e)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
