import { Code2, LockKeyhole, UserPlus } from "lucide-react";

type AuthGlowSceneProps = {
  variant?: "login" | "register" | "forgot";
};

const sceneIcons = {
  login: Code2,
  register: UserPlus,
  forgot: LockKeyhole,
};

export function AuthGlowScene({ variant = "login" }: AuthGlowSceneProps) {
  const FloatingIcon = sceneIcons[variant];

  return (
    <div className="relative hidden min-h-[390px] xl:block" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-noogym-lime/10 blur-3xl" />
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(182,255,0,0.32)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_center,black,transparent_66%)]" />
      <div className="absolute left-1/2 top-[54%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-lg border border-noogym-lime/50 bg-black/45 shadow-[0_0_70px_rgba(182,255,0,0.28)]" />
      <div className="absolute left-1/2 top-[54%] grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-noogym-lime/35 bg-[#071007] shadow-glow">
        <span className="text-7xl font-black text-noogym-lime drop-shadow-[0_0_22px_rgba(182,255,0,0.8)]">n</span>
      </div>
      <div className="absolute left-[56%] top-[14%] grid h-28 w-36 -translate-x-1/2 rotate-6 place-items-center rounded-lg border border-noogym-lime/35 bg-black/55 text-noogym-lime shadow-glow backdrop-blur">
        <FloatingIcon className="h-14 w-14" />
      </div>
      <div className="absolute left-[68%] top-[47%] h-24 w-32 rotate-3 rounded-lg border border-noogym-lime/25 bg-black/50 p-5 shadow-glow">
        <span className="block h-2 rounded bg-noogym-lime/80" />
        <span className="mt-4 block h-2 w-3/4 rounded bg-noogym-lime/35" />
        <span className="mt-3 block h-2 w-1/2 rounded bg-noogym-lime/25" />
      </div>
      <div className="absolute inset-x-8 bottom-0 h-20 rounded-[50%] bg-noogym-lime/10 blur-2xl" />
    </div>
  );
}
