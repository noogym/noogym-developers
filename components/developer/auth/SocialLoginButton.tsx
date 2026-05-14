"use client";

import { Github } from "lucide-react";
import { useRouter } from "next/navigation";

type SocialLoginButtonProps = {
  provider: "github" | "google";
};

export function SocialLoginButton({ provider }: SocialLoginButtonProps) {
  const router = useRouter();
  const isGithub = provider === "github";

  return (
    <button
      type="button"
      onClick={() => router.push("/dashboard")}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/12 bg-white/[0.02] px-5 text-base font-semibold text-white transition hover:border-noogym-lime/55 hover:bg-noogym-lime/5"
    >
      {isGithub ? (
        <Github className="h-6 w-6" />
      ) : (
        <span className="text-2xl font-bold leading-none">
          <span className="text-[#4285F4]">G</span>
        </span>
      )}
      {isGithub ? "GitHub" : "Google"}
    </button>
  );
}
