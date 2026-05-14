import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <p className="text-sm text-noogym-muted">Legal</p>
      <h1 className="text-4xl font-bold text-white md:text-5xl">Termos de Uso</h1>
      <div className="noogym-card space-y-5 p-6 text-sm leading-7 text-white/74">
        <p>
          Estes termos orientam o uso do Noogym Developer, incluindo documentacao, chaves de API,
          SDKs, exemplos e ambientes de teste.
        </p>
        <p>
          Ao criar uma conta, voce concorda em usar as APIs de forma segura, proteger suas chaves e
          respeitar limites de uso, privacidade e boas praticas de integracao.
        </p>
        <p>
          Para duvidas sobre contratos, faturacao ou condicoes comerciais, fale com o nosso time.
        </p>
        <Link href="/contact" className="lime-button mt-2">Entrar em contato</Link>
      </div>
    </section>
  );
}
