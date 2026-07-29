import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export default function Heading({
  heading,
  subtitle,
  align = "left",
  className,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {heading}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-8 text-slate-400",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}