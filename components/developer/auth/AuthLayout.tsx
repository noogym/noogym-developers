import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { NoogymLogo } from "@/components/developer/NoogymLogo";
import { AuthFeatureItem } from "./AuthFeatureItem";
import { AuthGlowScene } from "./AuthGlowScene";

type AuthLayoutProps = {
  eyebrow: string;
  eyebrowHref: string;
  eyebrowLink: string;
  title: React.ReactNode;
  description: string;
  features: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  children: React.ReactNode;
  bottomCard?: React.ReactNode;
  scene?: "login" | "register" | "forgot";
};

export function AuthLayout({
  eyebrow,
  eyebrowHref,
  eyebrowLink,
  title,
  description,
  features,
  children,
  bottomCard,
  scene = "login",
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020405] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(182,255,0,0.08),transparent_24rem),radial-gradient(circle_at_76%_50%,rgba(182,255,0,0.11),transparent_28rem),linear-gradient(135deg,#020405,#05090d_46%,#010203)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(182,255,0,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.12)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:radial-gradient(circle_at_48%_54%,black,transparent_62%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 py-6 sm:px-7 lg:px-10 xl:px-12">
        <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <NoogymLogo />
          <p className="text-sm text-white/72 sm:text-base">
            {eyebrow}
            <Link href={eyebrowHref} className="ml-3 font-semibold text-noogym-lime hover:text-[#d7ff65]">
              {eyebrowLink}
            </Link>
          </p>
        </header>

        <div className="grid flex-1 items-start gap-9 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.9fr)] lg:items-center lg:py-12 xl:gap-14 2xl:gap-16">
          <section className="relative min-w-0">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg lg:mt-7 lg:text-xl lg:leading-8">{description}</p>
            </div>

            <div className="relative mt-8 grid gap-8 xl:grid-cols-[minmax(300px,0.72fr)_1fr] xl:items-center">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
                {features.map((feature) => (
                  <AuthFeatureItem key={feature.title} {...feature} />
                ))}
              </div>
              <AuthGlowScene variant={scene} />
            </div>

            {bottomCard ? <div className="mt-8 max-w-xl">{bottomCard}</div> : null}
          </section>

          <section className="flex w-full justify-center lg:justify-end">{children}</section>
        </div>
      </div>
    </main>
  );
}
