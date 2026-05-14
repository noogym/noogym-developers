import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

type DashboardCardProps = {
  title: string;
  description: string;
  action: string;
  href: string;
  icon: LucideIcon;
};

export function DashboardCard({ title, description, action, href, icon: Icon }: DashboardCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-noogym-lime/35 hover:bg-noogym-lime/[0.035]">
      <Icon className="h-9 w-9 text-noogym-lime" />
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/62">{description}</p>
      <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-noogym-lime hover:text-[#d7ff65]">
        {action}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
