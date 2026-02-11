import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Solution {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function SolutionSection({ solutions }: { solutions: Solution[] }) {
  const timePerImage = 5;
  const totalImages = 3;
  const totalDuration = timePerImage * totalImages;

  /* 🔧 IMAGE FRAME CONTROL */
  const imageHeight = "300px";
  const imageMaxWidth = "700px";

  return (
    <section className="py-28 bg-[#0F0124] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution} 
              index={index} 
              imageHeight={imageHeight}
              imageMaxWidth={imageMaxWidth}
              totalDuration={totalDuration}
            />
          ))}
        </div>
      </div>

      <style>{`
        .slideshow-track {
          display: flex;
          width: 300%;
          animation: seamlessSlide linear infinite;
        }

        .slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .group:hover .slide-img {
          transform: scale(1.08);
        }

        .group:hover .slideshow-track {
          animation-play-state: paused;
        }

        @keyframes seamlessSlide {
          0%, 30% { transform: translateX(0%); }
          33.33%, 63.33% { transform: translateX(-100%); }
          66.66%, 96.66% { transform: translateX(-200%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}

/* Sub-component to handle scroll logic for each card */
function SolutionCard({ solution, index, imageHeight, imageMaxWidth, totalDuration }: any) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Vertical Parallax Effect (Up/Down movement)
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Dynamic Gradient Intensity (Fades in/out based on scroll position)
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      className="relative"
    >
      {/* ===== GRADIENT BORDER WRAPPER ===== */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="rounded-[2.5rem] p-[2px] bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF] shadow-[0_0_30px_rgba(106,123,255,0.2)]"
      >
        {/* INNER CONTENT (NO GRADIENT INSIDE) */}
        <div className="rounded-[2.5rem] bg-[#0F0124] backdrop-blur-2xl border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-11 items-center p-10 lg:p-10">
            
            {/* TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div className="inline-flex w-fit p-3 rounded-xl bg-white/5 border border-white/10 mb-6 shadow-inner">
                <solution.icon className="h-8 w-8 text-[#6A7BFF]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                {solution.title}
              </h2>

              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">
                {solution.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {solution.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#FF66C4] flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/consultancy">
                  <Button className="bg-gradient-to-r from-[#6A7BFF] to-[#8E9AFF] text-white rounded-full px-8 transition-all hover:scale-105">
                    Request Consultancy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link to="/products">
                  <Button variant="outline" className="rounded-full bg-[#11111] hover:bg-gradient-to-r from-[#6A7BFF]/90 to-[#FF66C4]/90">
                    View Products
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={index % 2 === 1 ? "lg:order-1" : ""}
            >
              <div
                className="relative mx-auto rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group"
                style={{
                  height: imageHeight,
                  maxWidth: imageMaxWidth
                }}
              >
                {/* Slideshow Track */}
                <div 
                  className="slideshow-track"
                  style={{ animationDuration: `${totalDuration}s` }}
                >
                  <img src={solution.image} alt="" className="slide-img" />
                  <img src={solution.image} alt="" className="slide-img" />
                  <img src={solution.image} alt="" className="slide-img" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0124]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] tracking-widest text-white/60 font-bold uppercase">
                  Solution 0{index + 1}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}