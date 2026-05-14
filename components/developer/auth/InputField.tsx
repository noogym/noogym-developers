"use client";

import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  icon?: LucideIcon;
  autoComplete?: string;
};

export function InputField({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  autoComplete,
}: InputFieldProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && visible ? "text" : type;

  return (
    <label className="block">
      <span className="mb-3 block text-sm font-semibold text-white">{label}</span>
      <span className="relative block">
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(
            "min-h-14 w-full rounded-lg border border-white/12 bg-white/[0.035] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/42 focus:border-noogym-lime/70 focus:ring-2 focus:ring-noogym-lime/15 sm:px-5",
            Icon || isPassword ? "pr-12" : "",
          )}
        />
        {Icon && !isPassword ? (
          <Icon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
        ) : null}
        {isPassword ? (
          <button
            type="button"
            aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setVisible((value) => !value)}
            className="absolute right-4 top-1/2 rounded-md p-1 text-white/65 transition hover:text-noogym-lime"
          >
            {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        ) : null}
      </span>
    </label>
  );
}
