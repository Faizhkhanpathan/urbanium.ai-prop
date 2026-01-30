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
  ChevronLeft
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

export function DashboardSidebar({ isCollapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-accent-gradient p-1.5 rounded-lg">
                <Cpu className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">IoTronix</span>
            </Link>
          )}
          <button
            onClick={onToggle}
            className={cn(
              "p-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors",
              isCollapsed && "mx-auto"
            )}
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", isCollapsed && "rotate-180")} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-sidebar-border space-y-1">
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
              isCollapsed && "justify-center px-2"
            )}
          >
            <Settings className="h-5 w-5" />
            {!isCollapsed && <span className="font-medium">Settings</span>}
          </Link>
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
              isCollapsed && "justify-center px-2"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
