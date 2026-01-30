import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { cn } from "@/lib/utils";

export function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar 
        isCollapsed={isCollapsed} 
        onToggle={() => setIsCollapsed(!isCollapsed)} 
      />
      <main 
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
