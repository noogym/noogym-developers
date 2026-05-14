import { ArrowRight, Check, CheckCircle2, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { StatusBadge } from "@/components/developer/StatusBadge";
import { statusServices } from "@/data/developer";
import { iconMap } from "@/lib/icon-map";

function UptimeBars() {
  return (
    <div className="flex h-8 items-end gap-1">
      {Array.from({ length: 42 }).map((_, index) => (
        <span
          key={index}
          className="w-1.5 rounded-full bg-noogym-lime"
          style={{ height: `${18 + ((index * 7) % 14)}px`, opacity: index % 9 === 0 ? 0.65 : 1 }}
        />
      ))}
    </div>
  );
}

export default function StatusPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-7">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Status do <span className="lime-text">Noogym API</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Acompanhe a disponibilidade e o desempenho dos serviços da API Noogym em tempo real.
            </p>
            <div className="mt-5">
              <StatusBadge label="Todos os sistemas operacionais" />
            </div>
          </div>
          <GlowIllustrationCard label="OK" icon="activity" />
        </section>

        <section className="noogym-card p-5">
          <h2 className="mb-4 text-xl font-semibold text-white">Serviços da Plataforma</h2>
          <div className="code-scroll overflow-x-auto rounded-lg border border-white/10">
            {statusServices.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.name} className="grid gap-4 border-b border-white/10 p-4 last:border-b-0 md:grid-cols-[1fr_auto_auto] md:items-center">
                  <div className="flex gap-4">
                    <div className="rounded-lg border border-noogym-lime/20 bg-noogym-lime/10 p-3 text-noogym-lime">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-noogym-muted">{service.description}</p>
                    </div>
                  </div>
                  <StatusBadge label={service.status} />
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-white">{service.uptime}</span>
                    <UptimeBars />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="noogym-card p-5">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-white">Uptime dos últimos 90 dias</h2>
              <div className="mt-5 h-28 rounded-md bg-[linear-gradient(180deg,rgba(182,255,0,0.16),transparent)]">
                <svg viewBox="0 0 820 110" className="h-full w-full">
                  <polyline
                    fill="none"
                    stroke="#B6FF00"
                    strokeWidth="3"
                    points="0,58 30,45 60,52 90,38 120,44 150,41 180,49 210,39 240,42 270,40 300,47 330,43 360,45 390,35 420,41 450,39 480,43 510,37 540,45 570,39 600,44 630,36 660,42 690,35 720,38 750,33 790,39 820,30"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">99.99%</p>
              <p className="text-sm text-noogym-muted">Uptime geral</p>
            </div>
          </div>
        </section>

        <section className="noogym-card p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-white">Histórico de incidentes</h2>
            <Link href="/status" className="inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-white/10 p-4 md:flex-row md:items-center">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-noogym-lime" />
            <div className="w-40 text-sm text-white/75">
              <p>22 Mai 2024</p>
              <p>08:45 - 09:05</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Manutenção programada concluída</h3>
              <p className="mt-1 text-sm text-noogym-muted">Manutenção de rotina realizada com sucesso. Nenhum impacto para os usuários.</p>
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Status geral">
          <div className="grid place-items-center py-5 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-noogym-lime text-black shadow-glow">
              <Check className="h-8 w-8" />
            </div>
            <p className="mt-4 text-2xl font-semibold text-noogym-lime">Operacional</p>
            <p className="mt-2 text-sm leading-6 text-noogym-muted">Todos os sistemas estão funcionando normalmente.</p>
          </div>
          <p className="text-xs text-noogym-muted">Última atualização: há 1 minuto</p>
        </RightAsideCard>

        <RightAsideCard title="Incidentes" action={<a href="#" className="text-sm text-noogym-lime">Ver histórico</a>}>
          <div className="rounded-lg border border-white/10 p-6 text-center">
            <CheckCircle2 className="mx-auto h-9 w-9 text-noogym-lime" />
            <p className="mt-4 font-semibold text-white">Nenhum incidente recente</p>
            <p className="mt-2 text-sm leading-6 text-noogym-muted">Não há incidentes reportados nos últimos 30 dias.</p>
          </div>
        </RightAsideCard>

        <RightAsideCard title="Métricas em tempo real">
          <div className="space-y-3 text-sm">
            {[
              ["Requisições por minuto", "12,450 rpm"],
              ["Tempo médio de resposta", "120 ms"],
              ["Taxa de sucesso", "99.98%"],
              ["Erros (5xx)", "0.02%"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <span className="text-noogym-muted">{label}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
          <Link href="/status" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
            Ver métricas detalhadas
            <TrendingUp className="h-4 w-4" />
          </Link>
        </RightAsideCard>

        <RightAsideCard title="Assine as atualizações">
          <p className="text-sm leading-6 text-noogym-muted">Receba notificações sobre incidentes, manutenções e atualizações.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              className="min-w-0 flex-1 rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none placeholder:text-noogym-muted focus:border-noogym-lime/60"
              placeholder="Seu melhor e-mail"
            />
            <a href="mailto:developers@noogym.ao?subject=Atualizacoes%20de%20status%20Noogym" className="lime-button px-4 py-2.5">Inscrever-se</a>
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-noogym-muted">
            <Mail className="h-3.5 w-3.5 text-noogym-lime" />
            Sem spam. Cancele quando quiser.
          </p>
        </RightAsideCard>
      </aside>
    </div>
  );
}
