import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
  const location = useLocation();

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
                {navLinks.map((link) => (
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
                <Link to="/login">
                  <Button size="sm" className="h-9 px-5 bg-white/90 text-black hover:bg-white shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT – Logo */}
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
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-white/70 py-3">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}