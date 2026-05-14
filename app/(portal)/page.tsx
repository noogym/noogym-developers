import { ArrowRight, Gauge, LockKeyhole, Rocket, ServerCog, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/developer/CodeBlock";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { StatusBadge } from "@/components/developer/StatusBadge";
import { curlExample } from "@/data/developer";

const highlights = [
  {
    title: "Autenticação segura",
    description: "Tokens JWT e OAuth 2.0 para proteger seus dados e aplicações.",
    icon: LockKeyhole,
  },
  {
    title: "Fácil de integrar",
    description: "APIs simples, consistentes e bem documentadas.",
    icon: ServerCog,
  },
  {
    title: "Alta performance",
    description: "Infraestrutura escalável e otimizada para respostas rápidas.",
    icon: Gauge,
  },
];

export default function DeveloperHome() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-7">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="py-5">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Construa o futuro do fitness com a <span className="lime-text">Noogym API</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Integre com a maior plataforma de gestão de ginásios de Angola e crie experiências
              digitais incríveis.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/guides" className="lime-button">
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/apis" className="ghost-button">
                Ver documentação
              </Link>
            </div>
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["APIs RESTful", "Seguras e rápidas"],
                ["99.99% Online", "Alta disponibilidade"],
                ["Suporte dedicado", "Para desenvolvedores"],
                ["Atualizações", "Constantes"],
              ].map(([title, text]) => (
                <div key={title} className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-noogym-lime" />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-noogym-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <GlowIllustrationCard label="API" icon="code" />
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="noogym-card p-6">
              <item.icon className="h-8 w-8 text-noogym-lime" />
              <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-noogym-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section id="primeiros-passos" className="noogym-card p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Primeiros passos</h2>
              <p className="mt-1 text-sm text-noogym-muted">Faça sua primeira requisição em poucos passos.</p>
            </div>
            <p className="text-sm text-noogym-muted">
              Base URL: <span className="font-mono text-sky-300">https://api.noogym.ao/v1</span>
            </p>
          </div>
          <CodeBlock code={curlExample} language="cURL" />
        </section>

        <section className="noogym-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Rocket className="h-10 w-10 text-noogym-lime" />
            <div>
              <h2 className="text-lg font-semibold text-white">Fique por dentro das novidades</h2>
              <p className="text-sm text-noogym-muted">
                Receba atualizações sobre novas APIs, SDKs e recursos exclusivos para desenvolvedores.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row md:max-w-md">
            <input
              className="min-w-0 flex-1 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-noogym-muted focus:border-noogym-lime/60"
              placeholder="Seu melhor e-mail"
            />
            <a href="mailto:developers@noogym.ao?subject=Newsletter%20Noogym%20Developer" className="lime-button shrink-0">
              Inscrever-se
            </a>
          </div>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Status da API">
          <StatusBadge label="Todos os sistemas operacionais" />
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-noogym-muted">Disponibilidade</p>
              <p className="mt-1 text-3xl font-semibold text-white">99.99%</p>
            </div>
            <div>
              <p className="text-sm text-noogym-muted">Tempo de resposta</p>
              <p className="mt-1 text-3xl font-semibold text-white">120ms</p>
            </div>
            <div className="h-24 rounded-md border border-white/10 bg-[linear-gradient(180deg,rgba(182,255,0,0.15),transparent)] p-3">
              <svg viewBox="0 0 280 80" className="h-full w-full">
                <polyline
                  fill="none"
                  stroke="#B6FF00"
                  strokeWidth="3"
                  points="0,62 18,50 35,55 48,38 61,48 78,41 92,50 108,44 120,45 136,32 150,38 166,34 180,37 194,29 210,31 224,25 238,33 252,21 270,27 280,18"
                />
              </svg>
            </div>
          </div>
          <Link href="/status" className="ghost-button mt-5 w-full py-2.5">
            Ver status completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </RightAsideCard>

        <RightAsideCard title="Links rápidos">
          <div className="space-y-3">
            {[
              ["Documentação completa", "/apis"],
              ["Ambiente de testes", "/sdks#ambientes"],
              ["Changelog", "/changelog"],
              ["Exemplos práticos", "/#primeiros-passos"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="flex items-center justify-between rounded-md border border-white/10 p-4 text-sm text-white/84 hover:border-noogym-lime/40 hover:text-noogym-lime">
                {label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </RightAsideCard>
      </aside>
    </div>
  );
}
