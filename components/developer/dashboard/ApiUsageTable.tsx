import { CreditCard, KeyRound, ListChecks, UserRound, Webhook } from "lucide-react";
import Link from "next/link";

const rows = [
  {
    name: "Membros (Members)",
    description: "Gerencie e consulte membros da academia",
    requests: "12,458",
    icon: UserRound,
  },
  {
    name: "Check-ins",
    description: "Registre e consulte check-ins de membros",
    requests: "8,732",
    icon: ListChecks,
  },
  {
    name: "Planos (Plans)",
    description: "Crie e gerencie planos e modalidades",
    requests: "5,192",
    icon: KeyRound,
  },
  {
    name: "Pagamentos",
    description: "Processe pagamentos e transações",
    requests: "3,801",
    icon: CreditCard,
  },
  {
    name: "Assinaturas",
    description: "Gerencie assinaturas e renovações",
    requests: "2,910",
    icon: Webhook,
  },
];

export function ApiUsageTable() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">APIs mais utilizadas</h2>
        <Link href="/apis" className="text-sm font-medium text-noogym-lime hover:text-[#d7ff65]">
          Ver todas as APIs →
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025]">
        <div className="hidden grid-cols-[1fr_170px_150px] border-b border-white/10 px-5 py-3 text-sm text-white/62 md:grid">
          <span>API</span>
          <span>Requisições (30 dias)</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-white/8">
          {rows.map((row) => {
            const Icon = row.icon;

            return (
              <div key={row.name} className="grid gap-4 px-4 py-4 sm:px-5 md:grid-cols-[minmax(0,1fr)_150px_120px] lg:grid-cols-[minmax(0,1fr)_170px_150px] md:items-center">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-noogym-lime/20 bg-noogym-lime/8 text-noogym-lime">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-medium text-white">{row.name}</h3>
                    <p className="mt-1 text-sm text-white/55">{row.description}</p>
                  </div>
                </div>
                <p className="text-sm text-white md:text-base">
                  <span className="text-white/50 md:hidden">Requisições: </span>
                  {row.requests}
                </p>
                <span className="w-fit rounded-full bg-emerald-500/12 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  ● Ativo
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
