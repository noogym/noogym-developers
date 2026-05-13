import type { IconName } from "@/data/developer";
import { iconMap } from "@/lib/icon-map";

type GlowIllustrationCardProps = {
  label: string;
  icon?: IconName;
};

export function GlowIllustrationCard({ label, icon = "code" }: GlowIllustrationCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="relative hidden min-h-[260px] overflow-hidden rounded-lg lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,255,0,0.18),transparent_58%)]" />
      <div className="absolute inset-x-10 bottom-8 h-28 rounded-[50%] bg-noogym-lime/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-noogym-lime/35 bg-black/50 shadow-glow">
        <div className="grid h-28 w-28 place-items-center rounded-lg border border-noogym-lime/30 bg-noogym-lime/10 text-noogym-lime">
          <Icon className="h-14 w-14" />
        </div>
      </div>
      <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-4xl font-black uppercase text-noogym-lime drop-shadow-[0_0_18px_rgba(182,255,0,0.45)]">
        {label}
      </p>
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(182,255,0,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.16)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_68%)]" />
    </div>
  );
}
