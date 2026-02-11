import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const WORDS = [
  "ARTIFICIAL INTELLIGENCE",
  "SMART HOME",
  "WEB PLATFORMS",
  "INTELLIGENT SYSTEMS",
  "TECHNOLOGY",
];

export function HeroSection() {

  /* ================= TEXT PARTICLE ANIMATION ================= */
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const cycle = () => {
      setPhase("exit");
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setPhase("enter");
      }, 800);
    };

    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);
  /* ============================================================ */

  /* ================= CUSTOM CURSOR + TRAIL ================= */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    document.body.style.cursor = "none";
    const container = document.getElementById("cursor-trail");

    const cursor = document.createElement("div");
    cursor.className = "cursor-dot";
    container.appendChild(cursor);

    const dots = [];
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      container.appendChild(dot);
      dots.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      let x = mouseX, y = mouseY;

      dots.forEach((dot, i) => {
        dot.x += (x - dot.x) * 0.2;
        dot.y += (y - dot.y) * 0.2;
        dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px) scale(${1 - i * 0.05})`;
        x = dot.x;
        y = dot.y;
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => {
      document.body.style.cursor = "auto";
      container.innerHTML = "";
    };
  }, []);
  /* ========================================================= */

  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden pt-36 pb-24">

      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/ai-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-[#14053F]/80 z-10" />

      {/* ===== CURSOR ===== */}
      <div id="cursor-trail" className="pointer-events-none fixed inset-0 z-50" />

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-6 lg:px-8 relative z-20">

        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#6A7BFF] animate-ping" />
            AI • IoT • Intelligent Systems
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
            Building the Intelligence That Builds the Future For
          </h1>

          {/* Animated Text */}
          <div className="text-3xl lg:text-5xl font-semibold tracking-[0.25em] uppercase">
            <span className="inline-flex overflow-hidden">
              {WORDS[index].split("").map((char, i) => {
                const rx = Math.random() * 80 - 40;
                const ry = Math.random() * 80 - 40;
                const rr = Math.random() * 60 - 30;

                return (
                  <span
                    key={i}
                    className={`
                      letter
                      bg-gradient-to-r from-[#FF66C4] to-[#6A7BFF]
                      bg-clip-text text-transparent
                      ${phase === "exit" ? "scatter" : "gather"}
                    `}
                    style={{
                      ["--x"]: `${rx}px`,
                      ["--y"]: `${ry}px`,
                      ["--r"]: `${rr}deg`,
                      animationDelay: `${i * 35}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </span>
          </div>

          {/* Description */}
          <p className="max-w-3xl text-base lg:text-lg text-white/60 leading-relaxed">
            Urbanium delivers high-performance web solutions, innovative tech products,
            and intelligent home automation systems designed for modern enterprises
            and future-ready homes.
          </p>

          {/* CTA */}
          <Link to="/contact">
            <Button
              size="xl"
              className="px-12 py-6 bg-gradient-to-r from-[#FF66C4] to-[#6A7BFF] text-white tracking-wide hover:scale-110 transition-transform"
            >
              Contact Us <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .letter {
          display: inline-block;
          will-change: transform, opacity, filter;
          transition:
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.6s ease,
            filter 0.6s ease;
        }

        .gather {
          opacity: 1;
          transform: translate(0,0) rotate(0deg) scale(1);
        }

        .scatter {
          opacity: 0;
          filter:
            drop-shadow(0 0 6px #FF66C4)
            drop-shadow(0 0 14px #6A7BFF);
          transform:
            translate(var(--x), var(--y))
            rotate(var(--r))
            scale(0.6);
        }

        .cursor-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #6A7BFF;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .trail-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6A7BFF, #FF66C4);
          opacity: 0.75;
        }
      `}</style>

    </section>
  );
}
