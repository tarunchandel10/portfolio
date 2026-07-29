import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
