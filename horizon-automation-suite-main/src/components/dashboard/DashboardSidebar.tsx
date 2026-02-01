import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Cpu,
  BarChart3,
  Bell,
  HeadphonesIcon,
  Waves,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Cpu, label: "My Devices", path: "/dashboard/devices" },
  { icon: Waves, label: "Fisheries Monitor", path: "/dashboard/fisheries" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Bell, label: "Alerts", path: "/dashboard/alerts" },
  { icon: HeadphonesIcon, label: "Support", path: "/dashboard/support" },
];

interface DashboardSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({
  isCollapsed,
  onToggle,
}: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen z-50 border-r transition-all duration-300",
        "bg-slate-950 border-slate-800",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* HEADER */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-slate-800">
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-3">
              {/* Logo */}
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 p-1.5 shadow-md">
                <img
                  src="/URBANIUM.png"
                  alt="Urbanium"
                  className="h-full w-full object-contain rounded"
                />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-bold text-white">urbanium.ai</p>
                <p className="text-[10px] tracking-wider text-slate-400">
                  SMART AUTOMATION
                </p>
              </div>
            </Link>
          )}

          {/* Collapse Button */}
          <button
            onClick={onToggle}
            className={cn(
              "rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition",
              isCollapsed && "mx-auto"
            )}
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                isCollapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 shadow-inner"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    isActive && "scale-110"
                  )}
                />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="space-y-1 border-t border-slate-800 p-2">
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white transition",
              isCollapsed && "justify-center px-2"
            )}
          >
            <Settings className="h-5 w-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </Link>

          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-red-400 hover:bg-red-500/10 hover:text-red-500 transition",
              isCollapsed && "justify-center px-2"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium">Logout</span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
}
