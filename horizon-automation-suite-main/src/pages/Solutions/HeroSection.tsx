import { motion } from "framer-motion";

export function HeroSection() {
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
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 bg-[#0A0118] text-white overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(106, 123, 255, 0.05) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(106, 123, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            transform: 'perspective(1200px) rotateX(50deg) translateY(-20px) scale(1.5)',
            transformOrigin: 'top',
          }} 
        />
      </div>

      {/* Ambient Light Blooms */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#6A7BFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-[#FF66C4]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tagline Label */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="px-3.5 py-1 text-[20px] uppercase tracking-[0.3em] font-bold rounded-md bg-white/5 border border-white/10">
              <span className="bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] bg-clip-text text-transparent">
                OUR SOLUTION
              </span>
            </span>
          </motion.div>

          {/* Polished Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6"
          >
            Intelligent <br />
            <span className="relative inline-block">
              Automation &
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#6A7BFF]/40 to-transparent"
              />
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF] bg-[length:200%_auto] animate-gradient-flow">
              Digital Engineering
            </span>
          </motion.h1>

          {/* Compact Description */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-white/40 max-w-lg leading-relaxed font-normal mb-8"
          >
            Urbanium delivers end-to-end solutions in 
            <span className="text-white/80"> Smart Automation</span>, 
            <span className="text-white/80"> AI Systems</span>, and 
            <span className="text-white/80"> Custom Engineering</span> — built for 
            performance-driven businesses and modern scalability.
          </motion.p>

          {/* Minimal Footer */}
          <motion.div variants={itemVariants}>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 font-semibold">
              Excellence × Scalability × Security
            </span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}