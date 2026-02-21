import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, Cog, Factory, Waves, CheckCircle2, ArrowRight, 
  Building2, Users, Loader2, Mail, ShieldCheck, Briefcase, 
  ChevronRight, Globe
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "System Design & Architecture",
    description: "Our expert architects design scalable, secure IoT ecosystems tailored to enterprise requirements.",
    features: ["Requirements analysis", "Architecture blueprints", "Security planning", "Technology selection"],
  },
  {
    icon: Cog,
    title: "Custom IoT Deployment",
    description: "End-to-end implementation from specialized hardware to enterprise cloud platforms.",
    features: ["Hardware installation", "Firmware deployment", "System integration", "Go-live support"],
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description: "Advanced IIoT solutions featuring predictive maintenance and real-time operational analytics.",
    features: ["SCADA & PLC", "OEE dashboards", "Predictive maintenance", "Compliance reporting"],
  },
  {
    icon: Waves,
    title: "Fisheries Monitoring",
    description: "Scientific-grade monitoring systems designed for modern aquaculture and maritime operations.",
    features: ["Water quality sensors", "Disease prediction", "Remote monitoring", "Regulatory reporting"],
  },
];

const Consultancy = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/consultancy`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ firstName: "", lastName: "", email: "", company: "", interest: "", details: "" });
        }, 5000);
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection or contact support.");
    } finally {
      setLoading(false);
    }
  };

  const interests = [
    "Smart Home", "Smart Office", "Industrial IoT", 
    "Fisheries Monitoring", "Agriculture IoT", "Healthcare IoT"
  ];

  return (
    <div className="min-h-screen bg-[#11072F] text-slate-50 selection:bg-[#C258F2]/30">
      <Navbar />
      
      <main className="relative pt-20">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366f1]/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C258F2]/10 blur-[120px] rounded-full -z-10" />

<section className="pt-10 pb-20 lg:pt-5 lg:pb-32 relative">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* LEFT - Value Proposition */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Consultancy</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Expert Consulting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E72FC] to-[#C258F2]">
                    & Implementation
                  </span>
                </h1>
                <p className="text-xl text-purple-200/60 mb-10 leading-relaxed">
                  From concept to deployment, our experts guide your digital transformation journey with precision.
                </p>

                <div className="flex gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Building2 className="w-6 h-6 text-[#6E72FC]" />
                    <span className="font-bold">500+ Projects</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Users className="w-6 h-6 text-[#C258F2]" />
                    <span className="font-bold">Expert Team</span>
                  </div>
                </div>
              </motion.div>

             {/* RIGHT - Professional Form */}
<motion.div 
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2 }}
>
  <div className="relative bg-[#1a0b3d]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">

    {/* subtle glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#6E72FC]/10 via-transparent to-[#C258F2]/10 pointer-events-none" />

    {/* MacOS Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-purple-300/90">
        <Mail className="w-4 h-4" />
        Consultancy Request
      </div>
    </div>

    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          exit={{ opacity: 0, scale: 0.96 }}
          onSubmit={handleSubmit}
          className="p-8 space-y-5 relative z-10"
        >

          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="bg-[#241449]/90 border-white/10 text-white h-12 rounded-xl focus:ring-2 focus:ring-[#C258F2]/60 focus:border-[#C258F2] placeholder:text-white/30 transition-all shadow-inner"
              placeholder="First Name"
              required
            />
            <Input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="bg-[#241449]/90 border-white/10 text-white h-12 rounded-xl focus:ring-2 focus:ring-[#C258F2]/60 focus:border-[#C258F2] placeholder:text-white/30 transition-all shadow-inner"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email */}
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-[#241449]/90 border-white/10 text-white h-12 rounded-xl focus:ring-2 focus:ring-[#C258F2]/60 focus:border-[#C258F2] placeholder:text-white/30 transition-all shadow-inner"
            placeholder="Work Email"
            required
          />

          {/* Company */}
          <Input
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-[#241449]/90 border-white/10 text-white h-12 rounded-xl focus:ring-2 focus:ring-[#C258F2]/60 focus:border-[#C258F2] placeholder:text-white/30 transition-all shadow-inner"
            placeholder="Company Name"
          />

          {/* Interest */}
          <div className="relative">
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full h-12 bg-[#241449]/90 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#C258F2]/60 transition-all appearance-none"
              required
            >
              <option value="" disabled>Select Interest Area</option>
              {interests.map((i) => (
                <option key={i} value={i} className="bg-[#241449]">
                  {i}
                </option>
              ))}
            </select>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-purple-300/70 pointer-events-none" />
          </div>

          {/* Details */}
          <Textarea
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="min-h-[120px] bg-[#241449]/90 border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#C258F2]/60 focus:border-[#C258F2] placeholder:text-white/30 transition-all"
            placeholder="Describe your project requirements..."
          />

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
              {error}
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-gradient-to-r from-[#6E72FC] to-[#D75AEB] hover:brightness-110 text-white font-bold text-lg rounded-xl shadow-[0_10px_30px_-10px_rgba(194,88,242,0.6)] transition-all flex items-center justify-center gap-2 group border-none"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <span>Get Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-16 text-center space-y-6"
        >
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight">Sent Successfully</h3>
          <p className="text-purple-200/60">We will reach out to you within 24 hours.</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</motion.div>


            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 bg-black/20 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-[32px] border border-white/5 bg-[#1a0b3d]/50 hover:bg-[#241449] transition-all duration-300"
                >
                  <service.icon className="h-12 w-12 text-[#C258F2] mb-6 bg-[#C258F2]/10 p-2.5 rounded-2xl" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-purple-200/50 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-purple-200/80">
                        <CheckCircle2 className="w-3 h-3 text-[#6E72FC]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultancy;