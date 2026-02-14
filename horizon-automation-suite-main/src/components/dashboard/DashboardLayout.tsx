// 2. DashboardLayout.tsx - Updated with Urbanium branding
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { cn } from "@/lib/utils";
import UrbaniumLogo from "/URBANIUM.png";

export function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <DashboardSidebar 
        isCollapsed={isCollapsed} 
        onToggle={() => setIsCollapsed(!isCollapsed)} 
      />
      <main 
        className={cn(
          "transition-all duration-300 relative",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
