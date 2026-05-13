import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ApiItem } from "@/data/developer";
import { iconMap } from "@/lib/icon-map";

type ApiCardProps = {
  api: ApiItem;
};

export function ApiCard({ api }: ApiCardProps) {
  const Icon = iconMap[api.icon];
  const href = api.slug === "members" ? "/apis/members/list" : "/apis";

  return (
    <Link href={href} className="noogym-card group block p-6 transition hover:border-noogym-lime/45 hover:bg-noogym-lime/[0.035]">
      <div className="flex items-start gap-4">
        <div className="rounded-lg border border-noogym-lime/25 bg-noogym-lime/10 p-3 text-noogym-lime shadow-glow">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{api.name}</h3>
          <p className="mt-2 text-sm leading-6 text-noogym-muted">{api.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
            Ver endpoints
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
