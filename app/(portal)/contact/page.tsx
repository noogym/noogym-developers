import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <p className="text-sm text-noogym-muted">Suporte</p>
      <h1 className="text-4xl font-bold text-white md:text-5xl">Contato</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="mailto:suporte@noogym.ao?subject=Suporte%20Noogym%20Developer"
          className="noogym-card p-6 transition hover:border-noogym-lime/45"
        >
          <Mail className="h-8 w-8 text-noogym-lime" />
          <h2 className="mt-5 text-lg font-semibold text-white">Suporte por e-mail</h2>
          <p className="mt-2 text-sm leading-6 text-noogym-muted">
            Abra um ticket para ajuda com conta, API, SDKs ou ambiente sandbox.
          </p>
        </a>
        <a
          href="mailto:developers@noogym.ao?subject=Parceria%20Noogym%20Developer"
          className="noogym-card p-6 transition hover:border-noogym-lime/45"
        >
          <MessageCircle className="h-8 w-8 text-noogym-lime" />
          <h2 className="mt-5 text-lg font-semibold text-white">Parcerias e integracoes</h2>
          <p className="mt-2 text-sm leading-6 text-noogym-muted">
            Fale com o time developer para projetos, duvidas tecnicas e novas integracoes.
          </p>
        </a>
      </div>
    </section>
  );
}
