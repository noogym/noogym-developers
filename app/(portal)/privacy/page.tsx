import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <p className="text-sm text-noogym-muted">Legal</p>
      <h1 className="text-4xl font-bold text-white md:text-5xl">Politica de Privacidade</h1>
      <div className="noogym-card space-y-5 p-6 text-sm leading-7 text-white/74">
        <p>
          A Noogym protege os dados usados no portal developer com controles de acesso,
          criptografia e monitoramento operacional.
        </p>
        <p>
          Dados de conta, logs tecnicos e informacoes de integracao sao usados para autenticar,
          operar, proteger e melhorar a experiencia dos desenvolvedores.
        </p>
        <p>
          Se precisar solicitar informacoes, atualizar dados ou falar sobre privacidade, contacte o
          nosso suporte.
        </p>
        <Link href="/contact" className="lime-button mt-2">Falar com suporte</Link>
      </div>
    </section>
  );
}
