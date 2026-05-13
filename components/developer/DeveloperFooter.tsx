import { Github, Linkedin, MessageCircle, Youtube } from "lucide-react";
import { NoogymLogo } from "./NoogymLogo";

export function DeveloperFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/55 px-4 py-5 lg:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-8">
          <NoogymLogo />
          <p className="text-sm text-noogym-muted">© 2024 Noogym Developer. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
          <a href="#" className="hover:text-noogym-lime">Política de Privacidade</a>
          <a href="#" className="hover:text-noogym-lime">Termos de Uso</a>
          <a href="#" className="hover:text-noogym-lime">Contato</a>
          <span className="h-5 w-px bg-white/10" />
          {[Github, MessageCircle, Youtube, Linkedin].map((Icon, index) => (
            <a key={index} href="#" className="text-white/80 hover:text-noogym-lime">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
