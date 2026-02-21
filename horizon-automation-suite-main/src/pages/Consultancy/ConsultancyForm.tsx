import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ConsultancyForm = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl mx-auto 
                   backdrop-blur-xl bg-white/5 
                   border border-white/10 
                   rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Gradient Top Border */}
        <div className="h-[2px] bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF]" />

        <form className="p-8 space-y-6 text-white">

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-white/60">
                First Name
              </label>
              <Input className="bg-white/5 border-white/10 text-white 
                                focus:border-[#6A7BFF] focus:ring-0 
                                h-12 rounded-xl transition-all duration-300 
                                hover:border-[#FF66C4]" />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-white/60">
                Last Name
              </label>
              <Input className="bg-white/5 border-white/10 text-white 
                                focus:border-[#6A7BFF] focus:ring-0 
                                h-12 rounded-xl transition-all duration-300 
                                hover:border-[#FF66C4]" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/60">
              Work Email
            </label>
            <Input
              type="email"
              className="bg-white/5 border-white/10 text-white 
                         focus:border-[#6A7BFF] focus:ring-0 
                         h-12 rounded-xl transition-all duration-300 
                         hover:border-[#FF66C4]"
            />
          </div>

          {/* Company */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/60">
              Company Name
            </label>
            <Input className="bg-white/5 border-white/10 text-white 
                              focus:border-[#6A7BFF] focus:ring-0 
                              h-12 rounded-xl transition-all duration-300 
                              hover:border-[#FF66C4]" />
          </div>

          {/* Interest */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/60">
              Interest
            </label>
            <select
              className="flex w-full bg-white/5 border border-white/10 
                         h-12 rounded-xl px-3 text-sm text-white
                         focus:border-[#6A7BFF] outline-none 
                         transition-all duration-300 
                         hover:border-[#FF66C4]"
            >
              <option className="bg-black">Select Interest</option>
              <option className="bg-black">Smart Home</option>
              <option className="bg-black">Smart Office</option>
              <option className="bg-black">Industrial IoT</option>
              <option className="bg-black">Fisheries Monitoring</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/60">
              Project Details
            </label>
            <Textarea
              className="bg-white/5 border-white/10 text-white 
                         focus:border-[#6A7BFF] focus:ring-0 
                         rounded-xl min-h-[120px] 
                         transition-all duration-300 
                         hover:border-[#FF66C4]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              className="w-full h-14 rounded-xl text-white font-bold
                         bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF]
                         bg-[length:200%_auto]
                         hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300 animate-gradient-flow"
            >
              Send Message
            </Button>
          </div>

        </form>

        {/* Gradient Animation */}
        <style>{`
          @keyframes gradient-flow {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          .animate-gradient-flow {
            animation: gradient-flow 6s linear infinite;
          }
        `}</style>
      </motion.div>
    </div>
  );
};
