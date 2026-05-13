import Link from "next/link";

export function NoogymLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span
        aria-hidden
        className="h-9 w-11 rounded-md bg-[url('/logo.png')] bg-[length:190%] bg-center shadow-glow"
      />
      <span className="leading-none">
        <span className="block text-xl font-bold tracking-tight text-white">noogym</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-noogym-lime">
          Developer
        </span>
      </span>
    </Link>
  );
}
