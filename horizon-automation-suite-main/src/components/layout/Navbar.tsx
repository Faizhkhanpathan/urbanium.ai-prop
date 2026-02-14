import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Products", path: "/products" },
  { name: "Consultancy", path: "/consultancy" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Get nav links based on user auth state
  const getNavLinks = () => {
    if (user) {
      return [...navLinks, { name: "Dashboard", path: "http://localhost:8080/dashboard" }];
    }
    return navLinks;
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Handle background styling (scrolled state)
      setScrolled(currentScrollY > 40);

      // 2. Hide Navbar completely after scrolling 800px (roughly 1-2 large divs)
      // Change 800 to whatever distance matches your specific layout
      if (currentScrollY > 800) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isVisible 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none translate-y-[-10px]"} 
      `}
    >
      <nav
        className={`
          mx-auto transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]
          ${
            scrolled
              ? "bg-[#14053F]/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-2xl max-w-7xl mt-3 border border-white/10"
              : "bg-[#14053F] border-b border-white/5 rounded-none max-w-full"
          }
        `}
      >
        <div className={`px-4 lg:px-10 transition-all duration-700 ${scrolled ? "h-12 lg:h-14" : "h-14 lg:h-20"}`}>
          <div className="flex h-full items-center justify-between">
            
            {/* LEFT – Urbanium.AI */}
            <div className="flex-1 flex justify-start">
              <Link to="/">
                <div className={`font-bold text-white tracking-tight ${scrolled ? "text-xl" : "text-3xl"} transition-all duration-700`}>
                  Urbanium.AI
                </div>
              </Link>
            </div>

            {/* MIDDLE – Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1">
                {getNavLinks().map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${location.pathname === link.path ? "bg-white/20 text-white" : "text-white/70 hover:text-white"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                {user ? (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 flex items-center justify-center">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="Avatar" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                          {user.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-9 px-3 text-white hover:bg-white/20 hover:text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button size="sm" className="h-9 px-5 bg-white/90 text-black hover:bg-white shadow-lg">
                      Get Started
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT – Logo + Mobile Menu */}
            <div className="flex-1 flex justify-end items-center gap-3">
              <img src="URBANIUM.png" alt="Logo" className={`rounded-full object-contain transition-all ${scrolled ? "h-8 w-8" : "h-10 w-10"}`} />
              <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE DRAWER */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/20 px-4 pb-4 pt-3 bg-[#14053F]">
            <div className="flex flex-col gap-1">
              {getNavLinks().map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/70 py-3 rounded-lg hover:bg-white/10 px-2 hover:text-white transition-all"
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <div className="pt-2 border-t border-white/20 flex items-center gap-3 py-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 flex items-center justify-center">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-base">
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                  <div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-3 text-white hover:bg-white/20 text-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/70 py-3 font-medium hover:text-white rounded-lg px-2 hover:bg-white/10 transition-all"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
