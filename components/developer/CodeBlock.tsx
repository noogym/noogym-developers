"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  label?: string;
  className?: string;
};

export function CodeBlock({ code, language = "bash", label, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className={cn("overflow-hidden rounded-lg border border-white/10 bg-black/45", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-noogym-lime">
          {label ?? language}
        </span>
        <button
          onClick={copyCode}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white transition hover:border-noogym-lime/50 hover:text-noogym-lime"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="code-scroll overflow-x-auto p-4 text-sm leading-7 text-white/88">
        <code>{code}</code>
      </pre>
    </div>
  );
}
