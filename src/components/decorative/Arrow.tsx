import { cn } from "@/lib/utils";

interface ArrowProps {
  className?: string;
  direction?: "right" | "down" | "left" | "up";
}

export function Arrow({ className, direction = "right" }: ArrowProps) {
  const rotations = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  };

  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      className={cn("hand-drawn", rotations[direction], className)}
    >
      <path
        d="M5 20 Q 15 5, 30 15 T 55 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 5 L 55 10 L 48 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
