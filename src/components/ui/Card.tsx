import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "highlighted";
  hover?: boolean;
}

export function Card({
  className,
  variant = "default",
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6",
        {
          // Default - shadow only
          "shadow-md": variant === "default",
          // Bordered
          "border border-gray-200 shadow-sm": variant === "bordered",
          // Highlighted (for popular pricing)
          "border-2 border-primary-500 shadow-lg shadow-primary-500/10":
            variant === "highlighted",
        },
        // Hover effect
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
