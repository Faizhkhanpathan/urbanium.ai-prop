// 3. DashboardSidebar.tsx - Urbanium colors + Logo
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
  LogOut as LogoutIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import UrbaniumLogo from "/URBANIUM.png";

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

export function DashboardSidebar({ isCollapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900/95 via-purple-900/80 to-slate-900/95 backdrop-blur-xl border-r border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300 z-50",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header with Urbanium Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-purple-500/30 bg-white/5 backdrop-blur-sm shadow-sm">
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-200 group">
              <div className="p-2 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-xl shadow-lg group-hover:scale-105 transition-all duration-200">
                <img src={UrbaniumLogo} className="h-6 w-6 object-contain" alt="Urbanium" />
              </div>
              <div>
                <span className="font-black text-xl bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent tracking-tight">
                  Urbanium
                </span>
                <span className="text-xs font-medium text-purple-300">AI</span>
              </div>
            </Link>
          )}
          <button
            onClick={onToggle}
            className={cn(
              "p-2 rounded-xl hover:bg-white/10 text-purple-200 hover:text-white hover:shadow-lg transition-all duration-200 shadow-md",
              isCollapsed && "mx-auto"
            )}
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", isCollapsed && "rotate-180")} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5",
                  isActive 
                    ? "bg-gradient-to-r from-purple-500/90 to-pink-600/90 text-white shadow-xl border border-purple-400/50" 
                    : "text-purple-200/80 hover:text-white hover:bg-white/10 border border-transparent bg-white/5 backdrop-blur-sm",
                  isCollapsed && "justify-center px-3 py-3"
                )}
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-white" : "text-purple-300 group-hover:text-white")} />
                {!isCollapsed && (
                  <span className="font-semibold tracking-wide">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-purple-500/30 space-y-2 bg-white/5 backdrop-blur-sm rounded-t-3xl mt-auto">
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-2xl text-purple-300 hover:bg-white/20 hover:text-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-purple-400/30",
              isCollapsed && "justify-center px-3"
            )}
          >
            <Settings className="h-5 w-5" />
            {!isCollapsed && <span className="font-semibold">Settings</span>}
          </Link>
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-2xl text-purple-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-red-500/20 hover:text-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-400/30",
              isCollapsed && "justify-center px-3"
            )}
          >
            <LogoutIcon className="h-5 w-5" />
            {!isCollapsed && <span className="font-semibold">Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
