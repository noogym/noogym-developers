"use client";

import { useState } from "react";
import { DeveloperDashboardFooter } from "./DeveloperDashboardFooter";
import { DeveloperDashboardHeader } from "./DeveloperDashboardHeader";
import { DeveloperDashboardSidebar } from "./DeveloperDashboardSidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020405] text-white">
      <DeveloperDashboardHeader onMenuClick={() => setSidebarOpen(true)} />
      <DeveloperDashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen pt-16 lg:pl-72">
        {children}
        <DeveloperDashboardFooter />
      </div>
    </div>
  );
}
