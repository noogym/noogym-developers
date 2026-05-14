type AuthDividerProps = {
  children: React.ReactNode;
};

export function AuthDivider({ children }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-6 text-sm text-white/58">
      <span className="h-px flex-1 bg-white/10" />
      <span>{children}</span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}
