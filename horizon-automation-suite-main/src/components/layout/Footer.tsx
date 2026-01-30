import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Smart Home", path: "/solutions#home" },
    { name: "Smart Office", path: "/solutions#office" },
    { name: "Industrial IoT", path: "/solutions#industrial" },
    { name: "Fisheries Monitoring", path: "/solutions#fisheries" },
  ],
  products: [
    { name: "Smart Switches", path: "/products#switches" },
    { name: "Controllers", path: "/products#controllers" },
    { name: "Sensors", path: "/products#sensors" },
    { name: "Gateways", path: "/products#gateways" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* animated gradient glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.15),_transparent_55%)] opacity-80" />

      {/* subtle moving grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10 animate-[circuit-flow_16s_linear_infinite]" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand - Urbanium.AI with clean circle logo */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-primary/10 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_12px_40px_rgba(15,23,42,0.4)]"
            >
              <div className="relative">
                {/* Clean circle logo - NO green background */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/40">
                  <img 
                    src="/URBANIUM.png"
                    alt="Urbanium.AI"
                    className="h-6 w-6 object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-white">Urbanium.AI</span>
                <span className="mt-[-2px] text-[10px] tracking-[0.22em] text-primary-foreground/60">
                  SMART AUTOMATION
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-sm text-primary-foreground/70">
              End-to-end smart automation & IoT solutions for homes, offices, industries, and beyond.
              Transforming spaces into intelligent ecosystems.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="group relative rounded-lg bg-primary-foreground/10 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/30"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-accent/0 via-accent/40 to-accent/0 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className="relative h-5 w-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/75 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@urbanium.ai"
                  className="hover:text-accent transition-colors"
                >
                  info@urbanium.ai
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/75 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/75 hover:text-white transition-colors">
                <MapPin className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                <span>
                  Innovation Hub
                  <br />
                  Nagpur, Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-primary-foreground/55 md:flex-row">
            <p className="flex items-center gap-1">
              © 2026{' '}
              <span className="font-semibold text-white">Urbanium.AI</span>
              . All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="relative hover:text-accent transition-colors group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                to="/terms"
                className="relative hover:text-accent transition-colors group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* small animated top wave separator */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 h-10 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.35),_transparent_60%)] animate-[pulse_5s_ease-in-out_infinite]" />
      </div>
    </footer>
  );
}
