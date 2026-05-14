import { ArrowRight, Info, KeyRound } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/developer/CodeBlock";
import { GlowIllustrationCard } from "@/components/developer/GlowIllustrationCard";
import { GuideStepCard } from "@/components/developer/GuideStepCard";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { guideSteps, memberResponse } from "@/data/developer";

const authSnippet = `curl --request GET \\
  --url https://api.noogym.ao/v1/gyms \\
  --header 'Authorization: Bearer SUA_API_KEY' \\
  --header 'Content-Type: application/json'`;

const envSnippet = `NOOGYM_API_KEY="ng_live_xxxxxxxxxxxxxxxxxxxx"
NOOGYM_SECRET_KEY="sk_live_xxxxxxxxxxxxxxxxxxxx"
NOOGYM_WEBHOOK_SECRET="wh_live_xxxxxxxxxxxxxxxxxxxx"`;

export default function GuidesPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_360px]">
      <div className="min-w-0 space-y-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm text-noogym-muted">Documentação / Guias / Primeiros Passos</p>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Guia <span className="lime-text">de Início</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Bem-vindo ao Noogym Developer. Siga este guia para integrar sua aplicação com a
              plataforma Noogym em poucos passos.
            </p>
          </div>
          <GlowIllustrationCard label="Start" icon="rocket" />
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {guideSteps.map((step, index) => (
            <GuideStepCard key={step.title} index={index + 1} {...step} />
          ))}
        </section>

        <section className="space-y-7">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              <span className="lime-text">1.</span> Crie sua conta de desenvolvedor
            </h2>
            <p className="mt-4 text-white/74">Acesse o portal do Noogym Developer e crie sua conta gratuitamente.</p>
            <div className="noogym-card mt-5 flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
              <p className="flex gap-3 text-sm leading-6 text-white/78">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-noogym-lime" />
                Após a criação, você poderá criar aplicações, gerar chaves de API e acessar nossos recursos.
              </p>
              <Link href="/register" className="lime-button shrink-0">
                Criar conta gratuita
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div id="auth">
            <h2 className="text-2xl font-semibold text-white">
              <span className="lime-text">2.</span> Obtenha suas chaves de API
            </h2>
            <p className="mt-4 text-white/74">Suas chaves são necessárias para autenticar todas as requisições.</p>
            <CodeBlock className="mt-5" code={envSnippet} language="env" label="Ambiente" />
            <p className="mt-4 text-sm text-noogym-muted">
              Guarde suas chaves em segurança e nunca as compartilhe publicamente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              <span className="lime-text">3.</span> Faça sua primeira requisição
            </h2>
            <CodeBlock className="mt-5" code={authSnippet} language="bash" label="cURL" />
          </div>

          <div id="webhooks">
            <h2 className="text-2xl font-semibold text-white">
              <span className="lime-text">4.</span> Configure webhooks
            </h2>
            <p className="mt-4 text-white/74">
              Receba eventos de membros, pagamentos e assinaturas em tempo real.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              <span className="lime-text">5.</span> Vá para produção
            </h2>
            <p className="mt-4 text-white/74">
              Teste todos os fluxos no sandbox, configure rate limits e publique sua integração.
            </p>
          </div>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Neste guia">
          <ol className="space-y-4 border-l border-white/10 pl-5 text-sm">
            {guideSteps.map((step, index) => (
              <li key={step.title} className={index === 0 ? "text-noogym-lime" : "text-white/72"}>
                {index + 1}. {step.title}
              </li>
            ))}
          </ol>
        </RightAsideCard>

        <RightAsideCard title="Autenticação rápida">
          <CodeBlock code={authSnippet} language="bash" label="cURL" />
          <Link href="/guides#auth" className="ghost-button mt-4 py-2.5">
            Ver mais detalhes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </RightAsideCard>

        <RightAsideCard title="Exemplo de Resposta">
          <CodeBlock code={memberResponse} language="json" label="200 OK" />
          <Link href="/apis/members/list" className="ghost-button mt-4 py-2.5">
            Ver documentação da API
            <KeyRound className="h-4 w-4" />
          </Link>
        </RightAsideCard>
      </aside>
    </div>
  );
}
