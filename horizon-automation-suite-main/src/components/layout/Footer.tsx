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
    <footer className=" overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.15),_transparent_55%)] opacity-80" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="
                relative mb-6 inline-flex items-center gap-3 rounded-2xl
                bg-white/10 px-3 py-2 backdrop-blur-md
                transition-all duration-300

                shadow-[0_0_25px_rgba(106,123,255,0.15)]
                hover:shadow-[0_0_45px_rgba(106,123,255,0.35)]
                hover:bg-white/15
              "
            >
              {/* LOGO */}
              <div
                className="
                  relative w-10 h-10 rounded-full
                  bg-white/10 border border-white/20
                  p-1.5 flex items-center justify-center
                  shadow-[0_0_18px_rgba(106,123,255,0.35)]
                "
              >
                <img
                  src="/URBANIUM.png"
                  alt="Urbanium.AI"
                  className="h-6 w-6 rounded-full"
                />
              </div>

              {/* TEXT */}
              <div>
                <span
                  className="
                    text-base font-bold text-white
                    drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
                  "
                >
                  Urbanium.AI
                </span>
                <div className="text-[10px] tracking-[0.22em] text-white/50">
                  ---------------
                </div>
              </div>
            </Link>

            <p className="max-w-sm text-sm text-white/70">
              End-to-end smart automation & IoT solutions for homes, offices, industries, and beyond.
              Transforming spaces into intelligent ecosystems.
            </p>

            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    group rounded-lg bg-white/10 p-2
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/20
                  "
                >
                  <Icon
                    className="
                      h-5 w-5 text-white
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_6px_rgba(106,123,255,0.6)]
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Products" links={footerLinks.products} />
          <FooterColumn title="Consultancy" links={footerLinks.Consultancy} />

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <ContactItem Icon={Mail} text="urbaniumai@gmail.com" />
              <ContactItem Icon={Phone} text="+91 98765 43210" />
              <ContactItem Icon={MapPin} text="Nagpur, Maharashtra" />
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/55">
          <p>
            © 2026 <span className="font-semibold text-white">Urbanium.AI</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="glass-text-hover">Privacy Policy</Link>
            <Link to="/terms" className="glass-text-hover">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER COLUMN */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
             className="
  relative inline-flex items-center
  px-0 py-1 rounded-lg
  text-white/70
  transition-all duration-300
  hover:text-white
  hover:bg-white/10
  hover:backdrop-blur-md

  after:absolute after:left-0 after:-bottom-0.5
  after:h-[1px] after:w-0 after:bg-white/70
  after:transition-all after:duration-300
  hover:after:w-full
"
>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* CONTACT ITEM */
function ContactItem({ Icon, text }) {
  return (
    <li className="relative inline-flex items-center
   rounded-lg
  text-white/70
  transition-all duration-300
  hover:text-white
  hover:bg-white/10
  hover:backdrop-blur-md">
      <Icon className="h-4 w-4 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
      <span className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
        {text}
      </span>
    </li>
  );
}
