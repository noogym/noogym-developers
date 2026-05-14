"use client";

import { ArrowRight, Clock3, Mail, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "./AuthCard";
import { AuthDivider } from "./AuthDivider";
import { InputField } from "./InputField";
import { PasswordChecklist } from "./PasswordChecklist";
import { SocialLoginButton } from "./SocialLoginButton";

export function LoginForm() {
  const router = useRouter();

  return (
    <AuthCard>
      <form
        className="space-y-7"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/dashboard");
        }}
      >
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Entrar na sua conta</h2>
          <p className="mt-2 text-base text-white/66 sm:text-lg">Acesse sua conta para continuar</p>
        </div>

        <InputField label="E-mail" name="email" type="email" placeholder="seu@email.com" icon={Mail} autoComplete="email" />
        <InputField label="Senha" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />

        <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-3 text-white/82">
            <input type="checkbox" className="h-5 w-5 rounded border-white/15 bg-transparent accent-noogym-lime" />
            Lembrar de mim
          </label>
          <Link href="/forgot-password" className="font-medium text-noogym-lime hover:text-[#d7ff65]">
            Esqueci minha senha
          </Link>
        </div>

        <button type="submit" className="lime-button h-14 w-full text-base">
          Entrar
        </button>

        <AuthDivider>ou continue com</AuthDivider>

        <div className="grid gap-4 sm:grid-cols-2">
          <SocialLoginButton provider="github" />
          <SocialLoginButton provider="google" />
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/62">Ainda não tem uma conta?</p>
          <Link href="/register" className="mt-3 inline-flex items-center gap-2 font-semibold text-noogym-lime hover:text-[#d7ff65]">
            Criar conta gratuita
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}

export function RegisterForm() {
  const router = useRouter();

  return (
    <AuthCard>
      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/dashboard");
        }}
      >
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Criar sua conta</h2>
          <p className="mt-2 text-base text-white/66 sm:text-lg">É rápido e gratuito</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <InputField label="Nome completo" name="name" placeholder="Seu nome completo" icon={UserRound} autoComplete="name" />
          <InputField label="E-mail" name="email" type="email" placeholder="seu@email.com" icon={Mail} autoComplete="email" />
        </div>
        <InputField label="Senha" name="password" type="password" placeholder="Crie uma senha forte" autoComplete="new-password" />
        <PasswordChecklist />
        <InputField label="Confirmar senha" name="confirmPassword" type="password" placeholder="Confirme sua senha" autoComplete="new-password" />

        <label className="flex items-start gap-3 text-sm leading-6 text-white/76">
          <input type="checkbox" className="mt-0.5 h-5 w-5 rounded border-white/15 bg-transparent accent-noogym-lime" />
          <span>
            Li e concordo com os{" "}
            <Link href="/terms" className="text-noogym-lime underline underline-offset-2">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacy" className="text-noogym-lime underline underline-offset-2">
              Política de Privacidade
            </Link>
          </span>
        </label>

        <button type="submit" className="lime-button h-14 w-full text-base">
          Criar conta
        </button>

        <AuthDivider>ou crie com</AuthDivider>

        <div className="grid gap-4 sm:grid-cols-2">
          <SocialLoginButton provider="github" />
          <SocialLoginButton provider="google" />
        </div>

        <p className="text-sm leading-6 text-white/50">
          Ao criar uma conta, você concorda em receber atualizações e novidades da Noogym Developer.
        </p>
      </form>
    </AuthCard>
  );
}

export function ForgotPasswordForm() {
  const router = useRouter();

  return (
    <AuthCard className="max-w-[650px]">
      <form
        className="space-y-7"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="text-center">
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-noogym-lime shadow-glow">
            <Mail className="h-14 w-14" />
          </div>
          <h2 className="mt-7 text-2xl font-bold text-white sm:text-3xl">Esqueci minha senha</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/66 sm:text-lg sm:leading-8">
            Sem problemas! Informe seu e-mail e enviaremos um link seguro para redefinir sua senha.
          </p>
        </div>

        <InputField label="E-mail" name="email" type="email" placeholder="seu@email.com" icon={Mail} autoComplete="email" />

        <button type="submit" className="lime-button h-14 w-full text-base">
          Enviar link de redefinição
        </button>

        <div className="space-y-4 text-sm text-white/70">
          <p className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-noogym-lime" />
            O link será válido por 1 hora.
          </p>
          <p className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-noogym-lime" />
            Seus dados estão protegidos com criptografia de ponta.
          </p>
          <p className="flex flex-wrap items-center gap-2">
            Não tem acesso a este e-mail?
            <a href="mailto:suporte@noogym.ao?subject=Acesso%20ao%20e-mail%20Noogym%20Developer" className="inline-flex items-center gap-2 font-semibold text-noogym-lime">
              Entre em contato
              <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </div>

        <AuthDivider>ou voltar para o login</AuthDivider>

        <button type="button" onClick={() => router.push("/login")} className="ghost-button h-14 w-full text-base">
          Voltar para o login
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </AuthCard>
  );
}
