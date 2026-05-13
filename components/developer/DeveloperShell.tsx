import { DeveloperFooter } from "./DeveloperFooter";
import { DeveloperHeader } from "./DeveloperHeader";
import { DeveloperSidebar } from "./DeveloperSidebar";

export function DeveloperShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-noogym-black text-white">
      <DeveloperHeader />
      <DeveloperSidebar />
      <div className="min-h-screen pt-16 lg:pl-72">
        <main className="mx-auto w-full max-w-[1660px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
        <DeveloperFooter />
      </div>
    </div>
  );
}
