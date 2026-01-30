import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Factory, Home, Waves } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-iot-navy via-iot-charcoal to-iot-slate">
      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15)_0,_transparent_55%),linear-gradient(to_bottom,_rgba(15,23,42,0.9),rgba(15,23,42,1))]" />
      </div>

      {/* Soft Glow Orbs */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-[420px] h-[420px] bg-iot-teal/15 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-40px] w-[380px] h-[380px] bg-iot-cyan/15 rounded-full blur-3xl animate-[float_11s_ease-in-out_infinite]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-iot-teal/10 border border-iot-teal/30 text-iot-teal text-xs sm:text-sm font-medium shadow-[0_0_30px_rgba(45,212,191,0.25)]">
              <span className="w-2 h-2 rounded-full bg-iot-teal animate-pulse" />
              Enterprise IoT Solutions
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                End-to-End Smart{" "}
                <span className="bg-gradient-to-r from-iot-teal via-iot-cyan to-sky-400 bg-clip-text text-transparent">
                  Automation & IoT
                </span>{" "}
                Solutions
              </h1>

            
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full group bg-iot-teal text-slate-950 hover:bg-iot-cyan transition-all duration-300 shadow-[0_20px_45px_rgba(45,212,191,0.35)] hover:shadow-[0_24px_60px_rgba(56,189,248,0.45)]"
                >
                  <span className="font-semibold tracking-wide">Explore Solutions</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                variant="glass"
                size="xl"
                className="w-full sm:w-auto border border-slate-600/60 bg-slate-900/60 hover:bg-slate-800/70 text-slate-50 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5 text-iot-cyan" />
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Mini metrics row */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-status-online" />
                <span>Live monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-iot-cyan" />
                <span>Secure cloud-native stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-iot-teal" />
                <span>Edge intelligence</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs sm:text-sm text-slate-400 mb-4 uppercase tracking-[0.18em]">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center">
                {["TATA", "Reliance", "Mahindra", "L&T"].map((brand) => (
                  <span
                    key={brand}
                    className="text-white/80 font-semibold text-lg tracking-wide hover:text-iot-cyan transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual - Solution Icons Grid */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Outer subtle ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-iot-teal/15 shadow-[0_0_60px_rgba(45,212,191,0.20)]" />
              </div>

              {/* Central Hub with slow flip */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flip-3d animate-flip-slow">
                  <div className="absolute inset-0 bg-iot-teal/30 rounded-3xl blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
                  <div className="relative w-32 h-32 rounded-3xl bg-accent-gradient flex items-center justify-center shadow-[0_0_45px_rgba(56,189,248,0.55)] border border-white/15 backdrop-blur-md">
                    <span className="text-3xl font-black text-white tracking-[0.2em]">IoT</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-[float_7s_ease-in-out_infinite]">
                <div className="glass-card p-4 rounded-2xl bg-slate-900/70 border border-slate-500/40 shadow-lg hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all flip-3d hover:animate-flip">
                  <Home className="h-8 w-8 text-iot-teal mx-auto" />
                  <p className="text-xs text-white/80 mt-2 text-center font-medium">Smart Home</p>
                </div>
              </div>

              <div
                className="absolute top-1/2 right-4 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"
                style={{ animationDelay: "-1.5s" }}
              >
                <div className="glass-card p-4 rounded-2xl bg-slate-900/70 border border-slate-500/40 shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all flip-3d hover:animate-flip">
                  <Building2 className="h-8 w-8 text-iot-cyan mx-auto" />
                  <p className="text-xs text-white/80 mt-2 text-center font-medium">Smart Office</p>
                </div>
              </div>

              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-[float_9s_ease-in-out_infinite]"
                style={{ animationDelay: "-3s" }}
              >
                <div className="glass-card p-4 rounded-2xl bg-slate-900/70 border border-slate-500/40 shadow-lg hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-all flip-3d hover:animate-flip">
                  <Factory className="h-8 w-8 text-sky-400 mx-auto" />
                  <p className="text-xs text-white/80 mt-2 text-center font-medium">Industrial</p>
                </div>
              </div>

              <div
                className="absolute top-1/2 left-4 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]"
                style={{ animationDelay: "-4.5s" }}
              >
                <div className="glass-card p-4 rounded-2xl bg-slate-900/70 border border-slate-500/40 shadow-lg hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all flip-3d hover:animate-flip">
                  <Waves className="h-8 w-8 text-emerald-300 mx-auto" />
                  <p className="text-xs text-white/80 mt-2 text-center font-medium">Fisheries</p>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <circle
                  cx="250"
                  cy="250"
                  r="120"
                  fill="none"
                  stroke="url(#heroGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="opacity-30"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  fill="none"
                  stroke="url(#heroGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="opacity-10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
            className="opacity-95"
          />
        </svg>
      </div>
    </section>
  );
}
