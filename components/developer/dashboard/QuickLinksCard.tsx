import { ArrowRight, BookOpen, Box, Code2, Gauge, ScrollText } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Documentação completa", href: "/apis", icon: BookOpen },
  { label: "Ambiente de testes (Sandbox)", href: "/dashboard", icon: Box },
  { label: "Exemplos de código", href: "/#primeiros-passos", icon: Code2 },
  { label: "Changelog", href: "/changelog", icon: ScrollText },
  { label: "Status da API", href: "/status", icon: Gauge },
];

export function QuickLinksCard() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <h2 className="text-lg font-semibold text-white">Links rápidos</h2>
      <div className="mt-5 space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-white/84 hover:text-noogym-lime">
              <Icon className="h-4 w-4 text-noogym-lime" />
              <span className="min-w-0 flex-1">{item.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/55" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
