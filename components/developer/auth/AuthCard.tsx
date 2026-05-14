type AuthCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <div
      className={`relative w-full max-w-[680px] overflow-hidden rounded-lg border border-white/12 bg-[#05090d]/82 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.52)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-noogym-lime/55 before:to-transparent sm:p-7 lg:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
