import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  label?: string;
  variant?: "success" | "info" | "warning";
  className?: string;
};

export function StatusBadge({ label = "Operacional", variant = "success", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        variant === "success" && "border-noogym-lime/30 bg-noogym-lime/10 text-noogym-lime",
        variant === "info" && "border-sky-400/30 bg-sky-400/10 text-sky-300",
        variant === "warning" && "border-amber-400/30 bg-amber-400/10 text-amber-300",
        className,
      )}
    >
      <CheckCircle2 className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
