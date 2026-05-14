"use client";

import {
  AlertTriangle,
  Boxes,
  Code2,
  FileCode2,
  Gauge,
  HelpCircle,
  Home,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Network,
  PackageOpen,
  Settings2,
  ShieldQuestion,
  UsersRound,
  Webhook,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "Navegação",
    items: [
      { label: "Visão Geral", href: "/", icon: Home },
      { label: "APIs", href: "/apis", icon: Network },
      { label: "SDKs", href: "/sdks", icon: PackageOpen },
      { label: "Guias", href: "/guides", icon: FileCode2 },
      { label: "Changelog", href: "/changelog", icon: Settings2 },
      { label: "Status", href: "/status", icon: Gauge },
    ],
  },
  {
    title: "Referência de API",
    items: [
      { label: "Academias (Gyms)", href: "/apis", icon: Boxes },
      { label: "Membros (Members)", href: "/apis/members/list", icon: UsersRound },
      { label: "Autenticação", href: "/guides#auth", icon: LockKeyhole },
      { label: "Ambientes", href: "/sdks#ambientes", icon: KeyRound },
      { label: "Rate Limits", href: "/apis#rate-limits", icon: Gauge },
      { label: "Códigos de Erro", href: "/apis#erros", icon: AlertTriangle },
      { label: "Webhooks", href: "/guides#webhooks", icon: Webhook },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Exemplos", href: "/#primeiros-passos", icon: Code2 },
      { label: "SDKs", href: "/sdks", icon: PackageOpen },
      { label: "Melhores Práticas", href: "/guides", icon: ShieldQuestion },
      { label: "Perguntas Frequentes", href: "/guides#faq", icon: HelpCircle },
    ],
  },
];

export function DeveloperSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 top-16 z-40 hidden w-72 border-r border-white/10 bg-[#05090d]/94 lg:block">
      <div className="thin-scroll flex h-full flex-col overflow-y-auto px-5 py-7">
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-bold uppercase text-noogym-lime">{group.title}</p>
              <nav className="space-y-1">
                {group.items.map((item) => {
                  const isHashLink = item.href.includes("#");
                  const active =
                    isHashLink
                      ? false
                      : item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href.split("#")[0]);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-white/84 transition hover:bg-white/[0.06] hover:text-white",
                        active && "bg-white/10 text-white",
                      )}
                    >
                      <Icon className={cn("h-4 w-4", active && "text-noogym-lime")} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="noogym-card p-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="font-semibold text-white">Precisa de ajuda?</h3>
                <p className="mt-2 text-xs leading-5 text-noogym-muted">
                  Fale com nosso time de suporte para desenvolvedores.
                </p>
                <a href="mailto:suporte@noogym.ao?subject=Ticket%20Noogym%20Developer" className="mt-4 inline-flex rounded-md bg-noogym-lime px-4 py-2 text-xs font-semibold text-black">
                  Abrir ticket
                </a>
              </div>
              <LifeBuoy className="h-7 w-7 text-noogym-lime" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
