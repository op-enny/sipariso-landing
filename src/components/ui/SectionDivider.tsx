import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "full" | "short";
}

export function SectionDivider({
  className,
  variant = "full",
}: SectionDividerProps) {
  if (variant === "short") {
    return (
      <div
        className={cn(
          "w-20 h-1 bg-primary-500 mx-auto rounded-full",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-6xl h-px bg-gray-200 mx-auto",
        className
      )}
    />
  );
}
