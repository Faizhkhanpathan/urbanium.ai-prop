import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MouseEvent } from "react";

export function ProductsCTA() {
  // Tracking mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing the movement so the gradient feels "fluid"
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Creating the dynamic background string
  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${smoothX}px ${smoothY}px,
      rgba(106, 123, 255, 0.15),
      transparent 80%
    )
  `;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-28 bg-[#0F0124] overflow-hidden group"
    >
      {/* Dynamic Cursor Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Static Background Gradients for Depth */}
     <div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* Main blended gradient glow */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] 
      bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF] 
      rounded-full blur-[140px] opacity-30 animate-gradientMove" 
    />
  </div>

  {/* Secondary soft bottom glow */}
  <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] 
    bg-gradient-to-r from-[#FF66C4] via-[#6A7BFF] to-[#FF66C4] 
    rounded-full blur-[160px] opacity-20 animate-gradientMoveSlow" 
  />

</div>


      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
Looking for Custom-Built Technology?
          </h2>

          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Urbanium’s engineering team specializes in developing and manufacturing 
            custom IoT and automation systems aligned with your technical specifications and business objectives.
          </p>

          <Link to="/consultancy">
            <Button 
              variant="glass" 
              size="xl" 
              className="relative overflow-hidden bg-white/5 border-white/10 hover:bg-white/10 text-white px-10 py-7 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg font-semibold">
Consult Our Engineering Team                <ArrowRight className="h-5 w-5" />
              </span>
              
              {/* Subtle button internal glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A7BFF]/20 to-[#FF66C4]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
