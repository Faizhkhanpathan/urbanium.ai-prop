import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Factory, Home, Waves } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-iot-navy via-iot-charcoal to-iot-slate">
      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15)_0,_transparent_55%),linear-gradient(to_bottom,_rgba(15,23,42,0.9),rgba(15,23,42,1))]"/>
      </div>

      {/* Soft Glow Orbs */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-[420px] h-[420px] bg-iot-teal/15 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-40px] w-[380px] h-[380px] bg-iot-cyan/15 rounded-full blur-3xl animate-[float_11s_ease-in-out_infinite]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-iot-teal/10 border border-iot-teal/30 text-iot-teal text-xs sm:text-sm font-medium shadow-[0_0_30px_rgba(45,212,191,0.25)]">
              <span className="w-2 h-2 rounded-full bg-iot-teal animate-pulse" />
              Enterprise IoT Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-4xl font-black text-white leading-tight tracking-tight">
              End-to-End Smart{" "}
              <span className="bg-gradient-to-r from-iot-teal via-iot-cyan to-sky-400 bg-clip-text text-transparent">
                Automation & IoT
              </span>{" "}
              Solutions
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions">
                <Button
                  variant="hero"
                  size="xl"
                  className="group bg-iot-teal text-slate-950 hover:bg-iot-cyan shadow-[0_20px_45px_rgba(45,212,191,0.35)]"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                variant="glass"
                size="xl"
                className="border border-slate-600/60 bg-slate-900/60 text-slate-50 backdrop-blur-md flex items-center gap-2"
              >
                <Play className="h-5 w-5 text-iot-cyan" />
                Watch Demo
              </Button>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-status-online" />
                Live monitoring
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-iot-cyan" />
                Secure cloud-native stack
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-iot-teal" />
                Edge intelligence
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs sm:text-sm text-slate-400 mb-4 uppercase tracking-[0.18em]">
                Trusted by industry leaders
              </p>
              <div className="flex gap-8 justify-center lg:justify-start">
                {["TATA", "Reliance", "Mahindra", "L&T"].map((brand) => (
                  <span key={brand} className="text-white/80 font-semibold text-lg">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">

              {/* Outer Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-iot-teal/15 shadow-[0_0_60px_rgba(45,212,191,0.20)]" />
              </div>

              {/* 🔥 CENTER LOGO — ANIMATED CIRCULAR IMAGE WITH 3D FLIP */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flip-3d animate-flip-slow">

                  {/* Pulse Glow */}
                  <div className="absolute inset-0 rounded-full bg-iot-teal/25 blur-2xl animate-pulse" />

                  {/* Logo Circle */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white shadow-xl border border-white/20">
                    <img
                      src="/URBANIUM.png"
                      alt="URBANIUM"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-[float_7s_ease-in-out_infinite]">
                <IconCard icon={<Home />} label="Smart Home" />
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]">
                <IconCard icon={<Building2 />} label="Smart Office" />
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-[float_9s_ease-in-out_infinite]">
                <IconCard icon={<Factory />} label="Industrial" />
              </div>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]">
                <IconCard icon={<Waves />} label="Fisheries" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function IconCard({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="glass-card p-4 rounded-2xl bg-slate-900/70 border border-slate-500/40 shadow-lg text-center">
      <div className="h-8 w-8 mx-auto text-iot-teal">{icon}</div>
      <p className="text-xs text-white/80 mt-2 font-medium">{label}</p>
    </div>
  );
}
