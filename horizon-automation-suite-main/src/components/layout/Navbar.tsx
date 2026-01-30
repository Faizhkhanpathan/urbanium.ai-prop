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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto backdrop-blur-xl transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-background/95 shadow-md border border-border/40 rounded-2xl max-w-4xl"
              : "bg-background/85 border-b border-border/40 rounded-none max-w-full"
          }`}
      >
        <div
          className={`px-3 sm:px-4 lg:px-5 transition-all duration-500
            ${scrolled ? "h-11 lg:h-12" : "h-13 lg:h-14"}
          `}
        >
          <div className="flex h-full items-center justify-between">
            {/* Logo - IMAGE ONLY in circle format */}
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className={`relative rounded-full p-1.5 transition-transform duration-500
                  ${scrolled ? "scale-90" : "scale-100"}
                `}
              >
                {/* Clean image-only circular logo */}
                <img
                  src="URBANIUM.png"
                  alt="Urbanium.AI"
                  className="h-6 w-6 rounded-full object-contain"
                />
              </div>

              <div className="leading-tight">
                <span
                  className={`font-semibold text-foreground transition-all duration-500
                    ${scrolled ? "text-sm" : "text-base"}
                  `}
                >
                  Urbanium.AI
                </span>
                {!scrolled && (
                  <div className="text-[9px] text-muted-foreground tracking-[0.18em]">
                  
                  </div>
                )}
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300
                    ${
                      location.pathname === link.path
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-3 px-3 text-xs font-medium"
                >
                  Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="teal"
                  size="sm"
                  className="h-8 px-3 text-xs font-semibold"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile */}
            <button
              className="rounded-lg p-1.5 hover:bg-muted lg:hidden transition-colors duration-200"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/60 px-3 pb-3 pt-2 transition-all duration-400">
            <div className="mt-1 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm transition-colors duration-200
                    ${
                      location.pathname === link.path
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
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
