import { Github, Linkedin, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";
import { NoogymLogo } from "./NoogymLogo";

export function DeveloperFooter() {
  const socialLinks = [
    { icon: Github, href: "https://github.com" },
    { icon: MessageCircle, href: "https://discord.com" },
    { icon: Youtube, href: "https://youtube.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/55 px-4 py-5 lg:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <NoogymLogo />
          <p className="text-sm text-noogym-muted">© 2024 Noogym Developer. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
          <Link href="/privacy" className="hover:text-noogym-lime">Política de Privacidade</Link>
          <Link href="/terms" className="hover:text-noogym-lime">Termos de Uso</Link>
          <Link href="/contact" className="hover:text-noogym-lime">Contato</Link>
          <span className="hidden h-5 w-px bg-white/10 sm:block" />
          {socialLinks.map(({ icon: Icon, href }) => (
            <a key={href} href={href} className="text-white/80 hover:text-noogym-lime">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
