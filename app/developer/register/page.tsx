import { Code2, Rocket, ShieldCheck, UsersRound, Zap } from "lucide-react";
import { AuthLayout } from "@/components/developer/auth/AuthLayout";
import { RegisterForm } from "@/components/developer/auth/AuthForms";

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
  {
    title: "Suporte dedicado",
    description: "Conte com nossa equipe para acelerar sua integração e sucesso.",
    icon: Rocket,
  },
];

export default function RegisterPage() {
  return (
    <AuthLayout
      eyebrow="Já tem uma conta?"
      eyebrowHref="/login"
      eyebrowLink="Entrar"
      title={
        <>
          Crie sua conta e comece a construir com a <span className="text-noogym-lime">Noogym API</span>
        </>
      }
      description="Junte-se a desenvolvedores que já estão transformando academias e pessoas em experiências incríveis."
      features={features}
      scene="register"
      bottomCard={
        <div className="flex flex-col gap-5 rounded-lg border border-white/12 bg-white/[0.035] p-5 shadow-panel backdrop-blur sm:flex-row sm:items-center">
          <div className="flex -space-x-3">
            {["JS", "AF", "MS"].map((initials) => (
              <span key={initials} className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#071007] bg-white/12 text-xs font-bold text-white">
                {initials}
              </span>
            ))}
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#071007] bg-noogym-lime text-sm font-black text-black">
              10k+
            </span>
          </div>
          <div className="flex items-center gap-3">
            <UsersRound className="hidden h-6 w-6 text-noogym-lime sm:block" />
            <div>
              <h2 className="font-semibold text-white">Mais de 10.000 desenvolvedores</h2>
              <p className="mt-1 text-sm text-white/62">já constroem com a Noogym</p>
            </div>
          </div>
        </div>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}
