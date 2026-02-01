import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Smart Home", path: "/solutions#home" },
    { name: "Smart Office", path: "/solutions#office" },
    { name: "Industrial Automation", path: "/solutions#industrial" },
    { name: "and many more", path: "/solutions#fisheries" },
  ],
  products: [
    { name: "Smart Switches", path: "/products#switches" },
    { name: "Controllers", path: "/products#controllers" },
    { name: "Sensors", path: "/products#sensors" },
    { name: "Gateways", path: "/products#gateways" },
    { name: "Solars", path: "#" },
  ],
  Consultancy: [
    { name: "Web Development", path: "/products#switches" },
    { name: "App Development", path: "/products#controllers" },
    { name: "System design", path: "/products#sensors" },
    { name: "Fisheries monitering", path: "/products#gateways" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.15),_transparent_55%)] opacity-80" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-primary/10 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 p-1.5 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <img src="/URBANIUM.png" alt="Urbanium.AI" className="h-6 w-6 rounded-full" />
              </div>
              <div>
                <span className="text-base font-bold text-white">Urbanium.AI</span>
                <div className="text-[10px] tracking-[0.22em] text-primary-foreground/60">
                  ---------------
                </div>
              </div>
            </Link>

            <p className="max-w-sm text-sm text-primary-foreground/70">
              End-to-end smart automation & IoT solutions for homes, offices, industries, and beyond.
              Transforming spaces into intelligent ecosystems.
            </p>

            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group rounded-lg bg-primary-foreground/10 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-accent/30"
                >
                  <Icon className="h-5 w-5 text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.6)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <FooterColumn title="Solutions" links={footerLinks.solutions} />

          {/* Products */}
          <FooterColumn title="Products" links={footerLinks.products} />

          {/* Consultancy */}
          <FooterColumn title="Consultancy" links={footerLinks.Consultancy} />

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white hover:text-accent transition-colors">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <ContactItem Icon={Mail} text="urbaniumai@gmail.com" />
              <ContactItem Icon={Phone} text="+91 98765 43210" />
              <ContactItem Icon={MapPin} text="Nagpur, Maharashtra" />
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between text-xs text-primary-foreground/55">
          <p>
            © 2026 <span className="font-semibold text-white">Urbanium.AI</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable column */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold tracking-wide text-white hover:text-accent transition-colors">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="group inline-flex items-center gap-2 text-primary-foreground/65 transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              <span className="relative">
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Contact item */
function ContactItem({ Icon, text }) {
  return (
    <li className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
      <Icon className="h-4 w-4 text-accent transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.6)]" />
      <span className="transition-colors group-hover:text-white">{text}</span>
    </li>
  );
}