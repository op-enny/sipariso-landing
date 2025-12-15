import { cn } from "@/lib/utils";

interface CircleHighlightProps {
  className?: string;
  children: React.ReactNode;
}

export function CircleHighlight({ className, children }: CircleHighlightProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10"
        viewBox="0 0 80 50"
        fill="none"
        preserveAspectRatio="none"
      >
        <ellipse
          cx="40"
          cy="25"
          rx="38"
          ry="22"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="3 5"
          fill="none"
          transform="rotate(-2 40 25)"
        />
      </svg>
    </span>
  );
}
