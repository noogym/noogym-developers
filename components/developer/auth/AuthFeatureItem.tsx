import type { LucideIcon } from "lucide-react";

type AuthFeatureItemProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function AuthFeatureItem({ title, description, icon: Icon }: AuthFeatureItemProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-white/0 p-0 transition sm:border-white/10 sm:bg-white/[0.02] sm:p-4 xl:border-transparent xl:bg-transparent xl:p-0">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-noogym-lime/75 bg-noogym-lime/5 text-noogym-lime shadow-[0_0_24px_rgba(182,255,0,0.12)] sm:h-14 sm:w-14">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <div>
        <h2 className="text-base font-semibold text-white sm:text-lg">{title}</h2>
        <p className="mt-1.5 max-w-sm text-sm leading-6 text-white/68">{description}</p>
      </div>
    </div>
  );
}
