import type { IconName } from "@/data/developer";
import { iconMap } from "@/lib/icon-map";

type GuideStepCardProps = {
  index: number;
  title: string;
  description: string;
  icon: IconName;
};

export function GuideStepCard({ index, title, description, icon }: GuideStepCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="noogym-card relative min-h-[170px] p-5">
      <span className="absolute left-4 top-4 grid h-7 w-7 place-items-center rounded-full border border-white/30 text-sm text-white">
        {index}
      </span>
      <Icon className="mx-auto mt-8 h-10 w-10 text-noogym-lime" />
      <h3 className="mt-5 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-noogym-muted">{description}</p>
    </div>
  );
}
