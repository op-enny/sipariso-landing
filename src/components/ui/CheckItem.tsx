import { cn } from "@/lib/utils";

interface CheckItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "success" | "error";
}

export function CheckItem({
  children,
  className,
  variant = "success",
}: CheckItemProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {variant === "success" ? (
        <svg
          className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-error-500 mt-0.5 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <span className="text-gray-600">{children}</span>
    </div>
  );
}
