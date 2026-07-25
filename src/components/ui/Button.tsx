import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}