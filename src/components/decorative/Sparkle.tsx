import { cn } from "@/lib/utils";

interface SparkleProps {
  className?: string;
  size?: number;
}

export function Sparkle({ className, size = 32 }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("hand-drawn", className)}
    >
      {/* Main sparkle */}
      <path
        d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Diagonal lines */}
      <path
        d="M8 8 L12 12 M20 20 L24 24 M24 8 L20 12 M12 20 L8 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
