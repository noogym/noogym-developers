import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RightAsideCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function RightAsideCard({ title, children, action, className }: RightAsideCardProps) {
  return (
    <section className={cn("noogym-card p-5", className)}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
