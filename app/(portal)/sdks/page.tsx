import { ArrowRight, CheckCircle2, FileCode2, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/developer/CodeBlock";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { SdkCard } from "@/components/developer/SdkCard";
import { sdkItems, tsExample } from "@/data/developer";

export default function SdksPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-7">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm text-noogym-muted">Documentação / SDKs / Visão Geral</p>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              SDKs <span className="lime-text">Noogym</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Integre o Noogym às suas aplicações de forma rápida e simples com nossos SDKs oficiais.
            </p>
          </div>
          <GlowIllustrationCard label="SDK" icon="box" />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Escolha o SDK</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {sdkItems.map((sdk, index) => (
              <SdkCard key={sdk.name} sdk={sdk} active={index === 0} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-white">JavaScript / TypeScript SDK</h2>
            <p className="mt-2 text-sm text-noogym-muted">O SDK oficial para aplicações Node.js, front-end e full-stack.</p>
          </div>
          <div className="mb-4 flex gap-8 border-b border-white/10 text-sm">
            {["Instalação", "Uso básico", "Exemplo completo"].map((tab, index) => (
              <button key={tab} className={`pb-3 ${index === 1 ? "border-b-2 border-noogym-lime text-white" : "text-noogym-muted"}`}>
                {tab}
              </button>
            ))}
          </div>
          <CodeBlock code={tsExample} language="typescript" label="TypeScript" />
          <Link href="/#primeiros-passos" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
            Ver mais exemplos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="noogym-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Não encontrou o que precisa?</h2>
            <p className="mt-1 text-sm text-noogym-muted">Fale com nosso time de suporte para desenvolvedores e tire suas dúvidas.</p>
          </div>
          <button className="lime-button">Abrir ticket</button>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Instalação">
          <p className="mb-4 text-sm text-noogym-muted">Instale o SDK via npm.</p>
          <CodeBlock code="npm install @noogym/sdk" language="bash" label="NPM" />
        </RightAsideCard>

        <RightAsideCard title="Ambientes" className="scroll-mt-24" >
          <p className="mb-4 text-sm leading-6 text-noogym-muted">
            Utilize diferentes ambientes para testar e publicar suas integrações.
          </p>
          <div id="ambientes" className="space-y-4">
            <p className="flex gap-3 text-white">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-500" />
              <span>
                <strong>Sandbox</strong>
                <span className="block text-sm text-noogym-muted">https://sandbox.api.noogym.ao</span>
              </span>
            </p>
            <p className="flex gap-3 text-white">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white/40" />
              <span>
                <strong>Produção</strong>
                <span className="block text-sm text-noogym-muted">https://api.noogym.ao</span>
              </span>
            </p>
          </div>
        </RightAsideCard>

        <RightAsideCard title="Recursos">
          <div className="space-y-2">
            {[
              ["Documentação da API", "Explore todos os endpoints disponíveis.", FileCode2],
              ["Autenticação", "Entenda como autenticar suas requisições.", ShieldCheck],
              ["Webhooks", "Receba eventos em tempo real.", Globe2],
              ["Exemplos de Código", "Exemplos práticos em várias linguagens.", CheckCircle2],
            ].map(([title, text, Icon]) => (
              <Link key={title as string} href="/apis" className="flex items-center justify-between gap-4 rounded-md p-3 hover:bg-white/[0.05]">
                <span className="flex gap-3">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-noogym-lime" />
                  <span>
                    <span className="block text-sm font-semibold text-white">{title as string}</span>
                    <span className="block text-xs leading-5 text-noogym-muted">{text as string}</span>
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-white/70" />
              </Link>
            ))}
          </div>
        </RightAsideCard>
      </aside>
    </div>
  );
}
