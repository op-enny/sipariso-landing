import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "error" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold",
        {
          "bg-gray-100 text-gray-700": variant === "default",
          "bg-accent-500 text-gray-700": variant === "accent",
          "bg-success-500 text-white": variant === "success",
          "bg-error-500 text-white": variant === "error",
          "border border-primary-500 text-primary-500": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
