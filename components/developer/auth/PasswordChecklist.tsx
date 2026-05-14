import { CheckCircle2 } from "lucide-react";

const items = [
  "Mínimo de 8 caracteres",
  "Uma letra maiúscula",
  "Um número",
  "Um caractere especial",
];

export function PasswordChecklist() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-white/62">A senha deve conter:</p>
      <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 fill-noogym-lime/25 text-noogym-lime" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
