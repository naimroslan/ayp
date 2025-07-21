import { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input className="border rounded px-3 py-2" {...props} />
    </div>
  );
}
