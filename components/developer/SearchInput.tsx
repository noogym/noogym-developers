"use client";

import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <label className="hidden h-10 w-full max-w-sm items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm text-noogym-muted transition focus-within:border-noogym-lime/60 lg:flex">
      <Search className="h-4 w-4" />
      <input
        className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-noogym-muted"
        placeholder="Buscar na documentação..."
      />
      <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold text-white">
        CTRL K
      </kbd>
    </label>
  );
}
