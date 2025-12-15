"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          // Variants
          {
            // Primary
            "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0":
              variant === "primary",
            // Secondary (Ghost with border)
            "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white":
              variant === "secondary",
            // Ghost
            "text-primary-500 hover:bg-primary-500/10": variant === "ghost",
            // Accent (Gold)
            "bg-accent-500 text-gray-700 hover:bg-accent-600 hover:shadow-xl":
              variant === "accent",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-10 py-5 text-xl": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
