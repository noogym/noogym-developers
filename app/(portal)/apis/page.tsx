import { ArrowRight, Clock3, Copy, Gauge, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ApiCard } from "@/components/developer/ApiCard";
import { CodeBlock } from "@/components/developer/CodeBlock";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { MetricCard } from "@/components/developer/MetricCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { apis } from "@/data/developer";

const metrics = [
  { value: "100+", label: "Endpoints disponíveis", icon: Network },
  { value: "99.99%", label: "Uptime da API", icon: Gauge },
  { value: "120ms", label: "Tempo médio de resposta", icon: Clock3 },
  { value: "100%", label: "HTTPS e segura", icon: ShieldCheck },
];

export default function ApisPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-7">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">APIs</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Integre o Noogym às suas aplicações e serviços. Uma plataforma,
              <span className="lime-text"> infinitas possibilidades.</span>
            </p>
          </div>
          <GlowIllustrationCard label="API" icon="cloud" />
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Principais APIs</h2>
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {apis.map((api) => (
              <ApiCard key={api.slug} api={api} />
            ))}
          </div>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Autenticação">
          <p className="text-sm leading-6 text-noogym-muted">
            Todas as requisições para a API do Noogym devem ser autenticadas.
          </p>
          <CodeBlock
            className="mt-4"
            label="Exemplo de Header"
            code="Authorization: Bearer YOUR_API_KEY"
            language="http"
          />
        </RightAsideCard>

        <RightAsideCard title="Ambientes">
          <p className="mb-4 text-sm text-noogym-muted">Escolha o ambiente adequado para o seu projeto.</p>
          <div className="space-y-3">
            {[
              ["Sandbox", "https://sandbox.api.noogym.ao"],
              ["Produção", "https://api.noogym.ao"],
            ].map(([label, url]) => (
              <div key={label} className="flex items-center justify-between rounded-md border border-white/10 p-4">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-semibold text-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-noogym-lime" />
                    {label}
                  </p>
                  <p className="mt-1 break-all text-sm text-noogym-muted">{url}</p>
                </div>
                <Copy className="h-4 w-4 text-noogym-lime" />
              </div>
            ))}
          </div>
        </RightAsideCard>

        <RightAsideCard title="Links rápidos">
          <div className="space-y-2">
            {["Guia de Autenticação", "Webhooks", "Códigos de Erro", "Exemplos de Código"].map((label) => (
              <Link key={label} href="/guides" className="flex items-center justify-between rounded-md p-3 text-sm text-white/84 hover:bg-white/[0.05] hover:text-noogym-lime">
                <span className="flex items-center gap-3">
                  <LockKeyhole className="h-4 w-4 text-noogym-lime" />
                  {label}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </RightAsideCard>

        <RightAsideCard title="Teste a API agora">
          <p className="text-sm leading-6 text-noogym-muted">Explore os endpoints disponíveis no ambiente de testes.</p>
          <Link href="/dashboard" className="ghost-button mt-4 w-full border-noogym-lime/70 py-2.5 text-noogym-lime">
            Abrir no Sandbox
          </Link>
        </RightAsideCard>
      </aside>
    </div>
  );
}
