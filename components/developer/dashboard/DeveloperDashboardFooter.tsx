import { Github, Linkedin, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";
import { NoogymLogo } from "@/components/developer/NoogymLogo";

export function DeveloperDashboardFooter() {
  const footerLinks = [
    { label: "Termos de Uso", href: "/terms" },
    { label: "Política de Privacidade", href: "/privacy" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/55 px-5 py-6 lg:px-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <NoogymLogo />
          <p className="text-sm text-white/58">© 2024 Noogym Developer. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/78">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-noogym-lime">
              {item.label}
            </Link>
          ))}
          <span className="hidden h-5 w-px bg-white/10 sm:block" />
          {[
            { icon: Github, href: "https://github.com" },
            { icon: MessageCircle, href: "https://discord.com" },
            { icon: Youtube, href: "https://youtube.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }) => (
            <Link key={href} href={href} className="text-white/78 hover:text-noogym-lime">
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
