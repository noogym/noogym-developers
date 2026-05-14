import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function UsageProgressCard() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-white">
          Uso da API <span className="font-normal text-white/62">(30 dias)</span>
        </h2>
        <Link href="/status" className="inline-flex items-center gap-2 text-sm font-medium text-noogym-lime">
          Ver métricas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-7">
        <p className="text-sm text-white/62">Requisições</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <p className="font-medium text-white">32,893 / 100,000</p>
          <p className="font-medium text-white">32.9%</p>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-[32.9%] rounded-full bg-noogym-lime shadow-glow" />
        </div>
      </div>
      <dl className="mt-7 space-y-4 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <dt className="text-white/62">Limite atual</dt>
          <dd className="text-white">100,000 requisições/mês</dd>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <dt className="text-white/62">Renovação em</dt>
          <dd className="text-white">15 dias</dd>
        </div>
      </dl>
    </section>
  );
}
