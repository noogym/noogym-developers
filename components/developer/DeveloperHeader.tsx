"use client";

import { Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { topNav } from "@/data/developer";
import { cn } from "@/lib/utils";
import { NoogymLogo } from "./NoogymLogo";
import { SearchInput } from "./SearchInput";

export function DeveloperHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-black/78 backdrop-blur-xl">
        <div className="flex h-full items-center gap-4 px-4 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center justify-between lg:w-64 lg:flex-none">
            <NoogymLogo />
            <button
              className="rounded-md border border-white/10 p-2 text-white lg:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <nav className="hidden flex-1 items-center gap-6 xl:flex">
            {topNav.map((item) => {
              const isHashLink = item.href.includes("#");
              const active =
                isHashLink
                  ? false
                  : item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative py-5 text-sm font-medium text-white/86 transition hover:text-noogym-lime",
                    active && "text-noogym-lime",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-noogym-lime shadow-glow" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <SearchInput />
            <button className="rounded-md border border-white/10 p-2 text-white transition hover:border-noogym-lime/50 hover:text-noogym-lime" aria-label="Modo escuro">
              <Moon className="h-4 w-4" />
            </button>
            <button className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-noogym-lime/50">
              Entrar
            </button>
            <button className="lime-button px-5 py-2.5">Criar conta</button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="thin-scroll ml-auto h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-[#05090d] px-5 pb-8 pt-24 shadow-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <nav className="space-y-2">
              {topNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-white/86",
                  item.href === pathname && "border-noogym-lime/40 bg-noogym-lime/10 text-noogym-lime",
                )}
              >
                {item.label}
              </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <button className="ghost-button w-full py-2.5">Entrar</button>
              <button className="lime-button w-full py-2.5">Criar conta</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
