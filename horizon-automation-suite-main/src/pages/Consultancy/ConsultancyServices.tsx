import { CheckCircle2 } from "lucide-react";
import { ConsultancyForm } from "./ConsultancyForm";
import { services } from "./servicesData";
import { motion } from "framer-motion";

export const ConsultancyServices = () => {
  return (
    <section className="relative py-28 bg-[#0A0118] text-white overflow-hidden">

      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(106, 123, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(106, 123, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-xl bg-white/5 
                           border border-white/10 
                           rounded-3xl p-10 
                           hover:border-[#6A7BFF] 
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center 
                                bg-gradient-to-br from-[#6A7BFF] to-[#FF66C4] mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-3 items-center text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-[#6A7BFF]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA TEXT */}
<div className="mt-24 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
    For more enquiry,
    <span className="block mt-2 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#6A7BFF] via-[#FF66C4] to-[#6A7BFF]">
      fill the form below
    </span>
  </h2>

  <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm md:text-base">
    Our technical team will review your requirements and respond with a structured consultation plan.
  </p>
</div>

{/* FORM SECTION */}
<div className="mt-12 flex justify-center">
  <div className="w-full max-w-2xl">
    <ConsultancyForm />
  </div>
</div>


      </div>
    </section>
  );
};
