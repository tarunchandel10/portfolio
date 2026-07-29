import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  strength?: number;
}

export default function Magnetic({
  children,
  strength = 0.4,
  className,
  ...props
}: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>(strength);

  return (
    <div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      {...props}
    >
      {children}
    </div>
  );
}
