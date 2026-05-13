import { ArrowRight, Box, Clock3, Filter, KeyRound, LockKeyhole, Server } from "lucide-react";
import { CodeBlock } from "@/components/developer/CodeBlock";
import { RightAsideCard } from "@/components/developer/RightAsideCard";
import { StatusBadge } from "@/components/developer/StatusBadge";
import { endpointDoc, memberResponse } from "@/data/developer";

const requestExample =
  "GET https://api.noogym.ao/v1/members?page=1&limit=10&search=joao";

export default function MembersListPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[1fr_420px]">
      <div className="min-w-0 space-y-7">
        <section>
          <p className="text-sm text-noogym-muted">Documentação / APIs / Membros / Listar Membros</p>
          <h1 className="mt-6 text-4xl font-bold text-white">{endpointDoc.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-noogym-lime/50 bg-noogym-lime/10 px-3 py-1 font-mono text-sm font-bold text-noogym-lime">
              {endpointDoc.method}
            </span>
            <span className="font-mono text-lg text-white">{endpointDoc.path}</span>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80">{endpointDoc.description}</p>
          <div className="mt-7 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              [LockKeyhole, "Autenticação", "Bearer Token"],
              [Server, "Ambiente", "Todas"],
              [KeyRound, "Permissão", "members:read"],
              [Clock3, "Rate limit", "100 requisições/min"],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-3">
                <Icon className="mt-1 h-4 w-4 text-noogym-muted" />
                <div>
                  <p className="text-sm text-noogym-muted">{title as string}</p>
                  <p className="text-sm font-medium text-white">{text as string}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Parâmetros de Query</h2>
          <div className="code-scroll overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-white">
                <tr>
                  {["Parâmetro", "Tipo", "Descrição", "Obrigatório"].map((head) => (
                    <th key={head} className="px-4 py-3 font-medium">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/78">
                {endpointDoc.params.map(([param, type, description, required]) => (
                  <tr key={param} className="bg-black/20">
                    <td className="px-4 py-3 font-mono text-white">{param}</td>
                    <td className="px-4 py-3">{type}</td>
                    <td className="px-4 py-3">{description}</td>
                    <td className="px-4 py-3">{required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Exemplo de Requisição</h2>
          <CodeBlock code={requestExample} language="http" label="GET" />
        </section>

        <section className="rounded-lg border border-sky-400/30 bg-sky-400/10 p-5">
          <div className="flex gap-4">
            <Filter className="mt-1 h-6 w-6 shrink-0 text-noogym-lime" />
            <div>
              <h2 className="font-semibold text-white">Dica</h2>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Use filtros e paginação para melhorar a performance da sua integração.
                Recomendamos utilizar page e limit em todas as requisições.
              </p>
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
        <RightAsideCard title="Exemplo de Resposta" action={<StatusBadge label="200 OK" />}>
          <CodeBlock code={memberResponse} language="json" label="JSON" />
        </RightAsideCard>
        <RightAsideCard title="Links rápidos">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {[
              ["Autenticação", LockKeyhole],
              ["Filtros", Filter],
              ["Paginação", Box],
              ["Códigos de Erro", Server],
            ].map(([label, Icon]) => (
              <a key={label as string} href="#" className="flex items-center justify-between rounded-md p-3 text-sm text-white/84 hover:bg-white/[0.05] hover:text-noogym-lime">
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-noogym-lime" />
                  {label as string}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </RightAsideCard>
        <RightAsideCard title="Teste esta API">
          <p className="text-sm leading-6 text-noogym-muted">Experimente esta requisição no nosso ambiente de testes.</p>
          <button className="ghost-button mt-4 w-full border-noogym-lime/70 py-2.5 text-noogym-lime">
            Abrir no Sandbox
          </button>
        </RightAsideCard>
      </aside>
    </div>
  );
}
