import { ArrowRight, BookOpen, Box, KeyRound, Webhook } from "lucide-react";
import Link from "next/link";
import { ApiUsageTable } from "@/components/developer/dashboard/ApiUsageTable";
import { DashboardCard } from "@/components/developer/dashboard/DashboardCard";
import { DashboardHeroIllustration } from "@/components/developer/dashboard/DashboardHeroIllustration";
import { DashboardShell } from "@/components/developer/dashboard/DashboardShell";
import { QuickLinksCard } from "@/components/developer/dashboard/QuickLinksCard";
import { StatusCard } from "@/components/developer/dashboard/StatusCard";
import { UsageProgressCard } from "@/components/developer/dashboard/UsageProgressCard";

const quickCards = [
  {
    title: "Suas chaves de API",
    description: "1 chave ativa",
    action: "Gerenciar chaves",
    href: "/dashboard",
    icon: KeyRound,
  },
  {
    title: "Ambiente atual",
    description: "Sandbox",
    action: "Alterar ambiente",
    href: "/dashboard",
    icon: Box,
  },
  {
    title: "Documentação",
    description: "Explore todos os endpoints",
    action: "Ver documentação",
    href: "/apis",
    icon: BookOpen,
  },
  {
    title: "Webhooks",
    description: "2 endpoints configurados",
    action: "Gerenciar webhooks",
    href: "/guides#webhooks",
    icon: Webhook,
  },
];

export default function DeveloperDashboardPage() {
  return (
    <DashboardShell>
      <main className="relative overflow-x-hidden px-4 py-6 sm:px-5 lg:px-8 lg:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_10%,rgba(182,255,0,0.08),transparent_28rem),linear-gradient(135deg,#020405,#05090d_48%,#020405)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(182,255,0,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto grid w-full max-w-[1640px] gap-7 xl:grid-cols-[minmax(0,1fr)_390px]">
          <div className="min-w-0 space-y-9">
            <section className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="min-w-0">
                <h1 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                  Bem-vindo de volta, <span className="text-noogym-lime">João!</span>
                </h1>
                <p className="mt-5 text-lg text-white/72">Pronto para construir algo incrível com a Noogym API?</p>
                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                  <Link href="/apis" className="lime-button">
                    Explorar APIs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/guides" className="ghost-button">
                    Ver guia de início
                  </Link>
                </div>
              </div>
              <DashboardHeroIllustration />
            </section>

            <section>
              <h2 className="mb-5 text-xl font-semibold text-white">Acesso rápido</h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {quickCards.map((card) => (
                  <DashboardCard key={card.title} {...card} />
                ))}
              </div>
            </section>

            <ApiUsageTable />
          </div>

          <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
            <StatusCard />
            <QuickLinksCard />
            <UsageProgressCard />
          </aside>
        </div>
      </main>
    </DashboardShell>
  );
}
