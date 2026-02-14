// 1. DashboardHeader.tsx - With Firebase Auth & Urbanium Logo
import { useState, useEffect } from "react";
import { Bell, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import UrbaniumLogo from "/URBANIUM.png";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) return null;

  return (
    <header className="h-16 border-b border-border/50 bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-xl sticky top-0 z-40 shadow-[0_4px_20px_rgba(20,5,63,0.3)]">
      <div className="h-full px-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-purple-200/80">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-300" />
            <Input 
              placeholder="Search devices..." 
              className="w-64 pl-9 h-10 bg-white/10 backdrop-blur-sm border-purple-500/30 text-white placeholder-purple-300 focus:border-purple-400 focus:ring-purple-500/30"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/10 hover:bg-white/20 text-purple-200 hover:text-white border-purple-500/30">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full shadow-lg" />
          </Button>

          {/* User Avatar */}
          <div className="flex items-center gap-3 pl-4 border-l border-purple-500/30">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white truncate max-w-24">
                {user.displayName || user.email?.split('@')[0] || 'User'}
              </p>
              <p className="text-xs text-purple-300">Admin</p>
            </div>
            <div className="relative group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-200">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-1 -right-1 h-6 w-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-2 border-white/30 shadow-lg"
                onClick={handleLogout}
              >
                <LogOut className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
