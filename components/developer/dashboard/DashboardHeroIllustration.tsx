import { BarChart3, Cloud, Code2 } from "lucide-react";

export function DashboardHeroIllustration() {
  return (
    <div className="relative hidden min-h-[250px] lg:block" aria-hidden>
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(90deg,rgba(182,255,0,0.18)_1px,transparent_1px),linear-gradient(rgba(182,255,0,0.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_56%_48%,black,transparent_64%)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-noogym-lime/40 bg-noogym-lime/5 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-12 place-items-center rounded-lg border border-noogym-lime/45 bg-[#071007] shadow-[0_0_70px_rgba(182,255,0,0.28)]">
        <span className="-rotate-12 text-7xl font-black text-noogym-lime drop-shadow-[0_0_20px_rgba(182,255,0,0.8)]">n</span>
      </div>
      <div className="absolute left-[16%] top-[24%] grid h-16 w-20 place-items-center rounded-lg border border-noogym-lime/25 bg-black/60 text-noogym-lime shadow-glow">
        <Code2 className="h-8 w-8" />
      </div>
      <div className="absolute right-[14%] top-[14%] grid h-16 w-20 place-items-center rounded-lg border border-noogym-lime/25 bg-black/60 text-noogym-lime shadow-glow">
        <Cloud className="h-8 w-8" />
      </div>
      <div className="absolute bottom-[18%] right-[12%] grid h-16 w-20 place-items-center rounded-lg border border-noogym-lime/25 bg-black/60 text-noogym-lime shadow-glow">
        <BarChart3 className="h-8 w-8" />
      </div>
    </div>
  );
}
