import { cn } from "@/lib/utils";

interface UnderlineProps {
  className?: string;
  width?: number;
}

export function Underline({ className, width = 120 }: UnderlineProps) {
  return (
    <svg
      width={width}
      height="12"
      viewBox="0 0 120 12"
      fill="none"
      className={cn("hand-drawn", className)}
    >
      <path
        d="M2 8 Q 20 2, 40 7 T 80 5 T 118 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
