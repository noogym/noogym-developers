import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StatusCard() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <h2 className="text-lg font-semibold text-white">Status da API</h2>
      <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
        Todos os sistemas operacionais
      </p>
      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-white/66">Disponibilidade</p>
          <p className="mt-1 text-3xl font-semibold text-white">99.99%</p>
        </div>
        <div>
          <p className="text-sm text-white/66">Tempo de resposta</p>
          <p className="mt-1 text-3xl font-semibold text-white">120ms</p>
        </div>
      </div>
      <div className="mt-5 h-24 rounded-md border border-white/8 bg-[linear-gradient(180deg,rgba(182,255,0,0.12),transparent)] p-3">
        <svg viewBox="0 0 280 80" className="h-full w-full" role="img" aria-label="Gráfico de disponibilidade">
          <polyline
            fill="none"
            stroke="#B6FF00"
            strokeWidth="3"
            points="0,56 12,44 24,52 36,37 48,45 60,34 72,49 84,43 96,50 108,47 120,36 132,31 144,37 156,35 168,42 180,30 192,36 204,28 216,39 228,31 240,34 252,25 264,35 280,22"
          />
        </svg>
      </div>
      <Link href="/status" className="mt-5 flex items-center justify-between rounded-md border border-white/8 px-3 py-2 text-sm text-white/82 hover:border-noogym-lime/35 hover:text-noogym-lime">
        Ver status completo
        <ArrowRight className="h-4 w-4 shrink-0" />
      </Link>
    </section>
  );
}
