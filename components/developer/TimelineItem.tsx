import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ChangelogItem } from "@/data/developer";

type TimelineItemProps = {
  item: ChangelogItem;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="relative border-l border-noogym-lime/35 pb-8 pl-8 last:pb-0">
      <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-noogym-lime shadow-glow" />
      <div className="noogym-card p-6">
        <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
          <div>
            <span className="rounded bg-noogym-lime/15 px-2 py-1 text-xs font-semibold text-noogym-lime">
              {item.category}
            </span>
            <p className="mt-4 text-2xl font-semibold text-white">{item.version}</p>
            <p className="mt-2 text-sm text-noogym-muted">{item.date}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-noogym-muted">Atualizações mockadas para o portal Noogym Developer.</p>
            <ul className="mt-4 space-y-2">
              {item.changes.map((change) => (
                <li key={change} className="flex gap-2 text-sm text-white/84">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-noogym-lime" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-between gap-5 md:items-end">
            <span className="rounded-md border border-white/15 px-2 py-1 text-xs text-white/80">{item.tag}</span>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
              Ver detalhes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
