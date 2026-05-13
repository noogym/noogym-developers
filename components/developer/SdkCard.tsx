import type { SdkItem } from "@/data/developer";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

type SdkCardProps = {
  sdk: SdkItem;
  active?: boolean;
};

export function SdkCard({ sdk, active }: SdkCardProps) {
  const Icon = iconMap[sdk.icon];

  return (
    <div
      className={cn(
        "noogym-card flex min-h-[138px] flex-col items-center justify-center gap-3 p-5 text-center transition",
        active && "border-noogym-lime/75 bg-noogym-lime/[0.06] shadow-glow",
      )}
    >
      <Icon className="h-9 w-9 text-noogym-lime" />
      <div>
        <h3 className="text-sm font-semibold text-white">{sdk.name}</h3>
        {sdk.popular ? <span className="mt-2 inline-flex rounded bg-noogym-lime/15 px-2 py-0.5 text-[11px] font-semibold text-noogym-lime">Mais popular</span> : null}
      </div>
    </div>
  );
}
