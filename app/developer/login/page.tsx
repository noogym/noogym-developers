import { Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import { AuthLayout } from "@/components/developer/auth/AuthLayout";
import { LoginForm } from "@/components/developer/auth/AuthForms";

const features = [
  {
    title: "APIs poderosas",
    description: "Integração simples e segura com todas as funcionalidades do Noogym.",
    icon: Code2,
  },
  {
    title: "Autenticação segura",
    description: "Proteção avançada para seus dados e aplicações.",
    icon: ShieldCheck,
  },
  {
    title: "Alta performance",
    description: "Infraestrutura escalável e otimizada para alta performance.",
    icon: Zap,
  },
];

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Ainda não tem uma conta?"
      eyebrowHref="/register"
      eyebrowLink="Criar conta"
      title={
        <>
          Bem-vindo ao <span className="text-noogym-lime">Noogym</span> Developer
        </>
      }
      description="A plataforma oficial para desenvolvedores integrarem com o ecossistema Noogym."
      features={features}
      scene="login"
      bottomCard={
        <div className="flex gap-4 rounded-lg border border-noogym-lime/45 bg-white/[0.035] p-5 shadow-[0_0_36px_rgba(182,255,0,0.08)] backdrop-blur sm:gap-5 sm:p-6">
          <Rocket className="h-12 w-12 shrink-0 text-noogym-lime" />
          <div>
            <h2 className="text-lg font-semibold text-white">Construa o futuro do fitness</h2>
            <p className="mt-2 text-sm leading-6 text-white/68">Vamos juntos transformar a experiência de academias e pessoas.</p>
          </div>
        </div>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
