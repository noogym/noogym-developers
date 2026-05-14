import { ArrowRight, Lightbulb, LockKeyhole, Mail, ShieldCheck, Zap } from "lucide-react";
import { AuthLayout } from "@/components/developer/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/developer/auth/AuthForms";

const features = [
  {
    title: "Seguro",
    description: "Usamos criptografia avançada para proteger sua conta e seus dados.",
    icon: LockKeyhole,
  },
  {
    title: "Rápido",
    description: "Você receberá o link de redefinição em poucos minutos.",
    icon: Mail,
  },
  {
    title: "Confiável",
    description: "O link é único e válido por tempo limitado.",
    icon: ShieldCheck,
  },
];

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      eyebrow="Lembrou sua senha?"
      eyebrowHref="/login"
      eyebrowLink="Entrar"
      title={
        <>
          Vamos recuperar o acesso à <span className="text-noogym-lime">sua conta</span>
        </>
      }
      description="Informe o e-mail da sua conta Noogym Developer que enviaremos um link para redefinir sua senha."
      features={features}
      scene="forgot"
      bottomCard={
        <div className="flex gap-5 rounded-lg border border-white/12 bg-white/[0.035] p-6 shadow-panel backdrop-blur">
          <Lightbulb className="h-12 w-12 shrink-0 text-noogym-lime" />
          <div>
            <h2 className="text-lg font-semibold text-white">Dica: não recebeu o e-mail?</h2>
            <p className="mt-2 text-sm leading-6 text-white/68">Verifique sua caixa de spam ou lixo eletrónico.</p>
            <a href="mailto:suporte@noogym.ao?subject=Suporte%20recuperacao%20de%20senha" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-noogym-lime">
              Fale com o suporte
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <Zap className="ml-auto hidden h-7 w-7 text-noogym-lime/45 sm:block" />
        </div>
      }
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
