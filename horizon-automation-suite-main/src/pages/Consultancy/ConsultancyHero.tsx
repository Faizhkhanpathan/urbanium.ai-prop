import { Building2, Users, Award } from "lucide-react";
import { ConsultancyForm } from "./ConsultancyForm";
import { motion } from "framer-motion";

export const ConsultancyHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative py-24 bg-[#0A0118] text-white overflow-hidden">

      {/* --- GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(106, 123, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(106, 123, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
      </div>

      {/* Ambient Lights */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#6A7BFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-[#FF66C4]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-semibold tracking-wide"
            >
              <span className="bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] bg-clip-text text-transparent">
                Enterprise Consultancy
              </span>
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mt-6 leading-tight tracking-tight"
            >
              Expert IoT Consulting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF] bg-[length:200%_auto] animate-gradient-flow">
                & Implementation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/50 mt-8 max-w-xl leading-relaxed"
            >
              From concept to deployment, our experts guide your
              digital transformation journey.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-10 text-white/80"
            >
              <div className="flex items-center gap-3">
                <Building2 size={20} />
                <span>500+ Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <Users size={20} />
                <span>Expert Team</span>
              </div>

              <div className="flex items-center gap-3">
                <Award size={20} />
                <span>ISO Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            
          </motion.div>

        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 8s linear infinite;
        }
      `}</style>

    </section>
  );
};
