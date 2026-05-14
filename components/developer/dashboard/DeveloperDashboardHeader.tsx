"use client";

import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NoogymLogo } from "@/components/developer/NoogymLogo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Documentação", href: "/" },
  { label: "APIs", href: "/apis" },
  { label: "SDKs", href: "/sdks" },
  { label: "Guias", href: "/guides" },
  { label: "Exemplos", href: "/#primeiros-passos" },
  { label: "Changelog", href: "/changelog" },
  { label: "Status", href: "/status" },
];

type DeveloperDashboardHeaderProps = {
  onMenuClick: () => void;
};

export function DeveloperDashboardHeader({ onMenuClick }: DeveloperDashboardHeaderProps) {
  const [themePreview, setThemePreview] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-[#020405]/92 backdrop-blur-xl">
      <div className="flex h-full min-w-0 items-center gap-2 px-3 sm:gap-4 sm:px-6 lg:px-7">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md border border-white/10 p-2 text-white lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0 shrink">
          <NoogymLogo />
        </div>

        <nav className="hidden flex-1 items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-white/84 transition hover:text-noogym-lime">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden h-10 w-full max-w-[320px] items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 text-sm text-white/48 lg:flex">
          <Search className="h-4 w-4" />
          <input className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/48" placeholder="Buscar na documentação..." />
          <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold text-white">CTRL</kbd>
          <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold text-white">K</kbd>
        </div>

        <button
          type="button"
          aria-label="Alternar destaque visual"
          aria-pressed={themePreview}
          onClick={() => setThemePreview((value) => !value)}
          className={cn(
            "hidden rounded-md p-2 text-white/84 transition hover:text-noogym-lime sm:inline-flex",
            themePreview && "bg-noogym-lime/10 text-noogym-lime",
          )}
        >
          <Sun className="h-5 w-5" />
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen((value) => !value)}
            className="relative rounded-md p-2 text-white/84 transition hover:text-noogym-lime"
            aria-label="Notificações"
            aria-expanded={notificationsOpen}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-noogym-lime text-[10px] font-bold text-black">2</span>
          </button>
          {notificationsOpen ? (
            <div className="absolute right-0 top-12 w-72 rounded-lg border border-white/10 bg-[#05090d] p-3 shadow-panel">
              <p className="px-2 pb-2 text-sm font-semibold text-white">Notificações</p>
              {["Nova versão da API publicada", "Uso mensal em 32.9%"].map((item) => (
                <Link key={item} href="/changelog" className="block rounded-md px-3 py-2 text-sm text-white/72 hover:bg-white/[0.05] hover:text-noogym-lime">
                  {item}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <Link href="/dashboard" className="flex shrink-0 items-center gap-3 rounded-md px-1 py-1 transition hover:bg-white/[0.04]">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-noogym-lime/30 bg-gradient-to-br from-white/20 to-noogym-lime/20 text-sm font-bold text-white">
            JS
          </span>
          <span className="hidden text-left md:block">
            <span className="block text-sm font-semibold text-white">João da Silva</span>
            <span className="block text-xs text-white/55">Desenvolvedor</span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-white/60 md:block" />
        </Link>
      </div>
    </header>
  );
}
