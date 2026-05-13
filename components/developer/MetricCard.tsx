import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <div className="noogym-card flex min-h-[96px] items-center gap-4 p-5">
      <div className="rounded-lg border border-noogym-lime/20 bg-noogym-lime/10 p-3 text-noogym-lime shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="text-sm text-noogym-muted">{label}</p>
      </div>
    </div>
  );
}
