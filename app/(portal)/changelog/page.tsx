import { ArrowRight, History, Mail } from "lucide-react";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { TimelineItem } from "@/components/developer/TimelineItem";
import { changelogItems } from "@/data/developer";

const filters = [
  ["Todas as versões", "24"],
  ["Novos recursos", "9"],
  ["Melhorias", "7"],
  ["Correções", "6"],
  ["Depreciações", "2"],
];

export default function ChangelogPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-7">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm text-noogym-muted">Documentação / Changelog</p>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Change<span className="lime-text">log</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Acompanhe as últimas atualizações da API Noogym. Novos recursos, melhorias e
              correções para você construir ainda mais.
            </p>
          </div>
          <GlowIllustrationCard label="Log" icon="file" />
        </section>

        <div className="flex gap-8 overflow-x-auto border-b border-white/10 text-sm">
          {["Todas as versões", "Novos recursos", "Melhorias", "Correções", "Depreciações"].map((tab, index) => (
            <button key={tab} className={`shrink-0 pb-3 ${index === 0 ? "border-b-2 border-noogym-lime text-white" : "text-noogym-muted"}`}>
              {tab}
            </button>
          ))}
        </div>

        <section>
          {changelogItems.map((item) => (
            <TimelineItem key={item.version} item={item} />
          ))}
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Filtrar por">
          <div className="space-y-2">
            {filters.map(([label, count], index) => (
              <button
                key={label}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm ${
                  index === 0 ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/[0.05]"
                }`}
              >
                {label}
                <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs">{count}</span>
              </button>
            ))}
          </div>
        </RightAsideCard>

        <RightAsideCard title="Fique por dentro">
          <p className="text-sm leading-6 text-noogym-muted">
            Receba novidades sobre novas versões da API, recursos e atualizações.
          </p>
          <input
            className="mt-4 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-noogym-muted focus:border-noogym-lime/60"
            placeholder="Seu melhor e-mail"
          />
          <button className="lime-button mt-3 w-full py-2.5">Inscrever-se</button>
          <p className="mt-3 flex items-center gap-2 text-xs text-noogym-muted">
            <Mail className="h-3.5 w-3.5 text-noogym-lime" />
            Sem spam. Cancele quando quiser.
          </p>
        </RightAsideCard>

        <RightAsideCard title="Versão atual">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold text-white">v2.8.0</p>
            <span className="rounded-md bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">Latest</span>
          </div>
          <p className="mt-2 text-sm text-noogym-muted">Lançada em 22 de Maio de 2024</p>
          <button className="ghost-button mt-4 w-full py-2.5">
            Ver documentação da versão
            <ArrowRight className="h-4 w-4" />
          </button>
        </RightAsideCard>

        <RightAsideCard title="Histórico de versões" action={<History className="h-5 w-5 text-white/70" />}>
          <p className="text-sm leading-6 text-noogym-muted">Consulte todas as versões anteriores da API Noogym.</p>
          <button className="ghost-button mt-4 w-full py-2.5">
            Ver todas as versões
            <ArrowRight className="h-4 w-4" />
          </button>
        </RightAsideCard>
      </aside>
    </div>
  );
}
