import {
  AlertCircle,
  BookOpen,
  Box,
  Code2,
  FileCode2,
  HelpCircle,
  Home,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Network,
  Rocket,
  ShieldQuestion,
  TerminalSquare,
  Webhook,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "",
    items: [{ label: "Visão Geral", href: "/dashboard", icon: Home, active: true }],
  },
  {
    title: "Começar",
    items: [
      { label: "Guia de Início", href: "/guides", icon: Rocket },
      { label: "Autenticação", href: "/guides#auth", icon: LockKeyhole },
      { label: "Ambiente e Chaves", href: "/dashboard", icon: KeyRound },
      { label: "Primeira Requisição", href: "/#primeiros-passos", icon: Code2 },
    ],
  },
  {
    title: "Documentação",
    items: [
      { label: "APIs", href: "/apis", icon: Network },
      { label: "Endpoints", href: "/apis/members/list", icon: TerminalSquare },
      { label: "Parâmetros", href: "/apis/members/list", icon: FileCode2 },
      { label: "Respostas", href: "/apis/members/list", icon: BookOpen },
      { label: "Códigos de Erro", href: "/apis", icon: AlertCircle },
      { label: "Webhooks", href: "/guides#webhooks", icon: Webhook },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "SDKs", href: "/sdks", icon: Box },
      { label: "Exemplos", href: "/#primeiros-passos", icon: Code2 },
      { label: "Melhores Práticas", href: "/guides", icon: ShieldQuestion },
      { label: "Perguntas Frequentes", href: "/guides#faq", icon: HelpCircle },
    ],
  },
];

type DeveloperDashboardSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function DeveloperDashboardSidebar({ open, onClose }: DeveloperDashboardSidebarProps) {
  return (
    <>
      <aside className="fixed bottom-0 left-0 top-16 z-40 hidden w-72 border-r border-white/10 bg-[#05090d]/96 lg:block">
        <SidebarContent />
      </aside>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden" onClick={onClose}>
          <aside
            className="thin-scroll h-full w-full max-w-sm overflow-y-auto border-r border-white/10 bg-[#05090d] px-5 py-5 shadow-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex justify-end">
              <button type="button" onClick={onClose} className="rounded-md border border-white/10 p-2 text-white" aria-label="Fechar menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      ) : null}
    </>
  );
}

function SidebarContent() {
  return (
    <div className="thin-scroll flex h-full flex-col overflow-y-auto px-5 py-7">
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title || "overview"}>
            {group.title ? <p className="mb-3 text-xs font-bold uppercase tracking-wide text-noogym-lime">{group.title}</p> : null}
            <nav className="space-y-1.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = "active" in item && item.active;

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
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
          <h3 className="font-semibold text-white">Precisa de ajuda?</h3>
          <p className="mt-2 text-xs leading-5 text-white/62">Fale com nosso time de suporte para desenvolvedores.</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <a href="mailto:suporte@noogym.ao?subject=Ticket%20Noogym%20Developer" className="rounded-md bg-noogym-lime px-4 py-2 text-xs font-semibold text-black shadow-glow">
              Abrir ticket
            </a>
            <LifeBuoy className="h-7 w-7 text-noogym-lime" />
          </div>
        </div>
      </div>
    </div>
  );
}
