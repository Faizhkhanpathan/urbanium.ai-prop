import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { 
  Compass, Cog, Factory, Waves, CheckCircle2, ArrowRight, 
  Building2, Users, Award, Loader2, Mail, UserRound 
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "System Design & Architecture",
    description: "Our expert architects design scalable, secure IoT ecosystems.",
    features: ["Requirements analysis", "Architecture blueprints", "Security planning", "Technology selection"],
  },
  {
    icon: Cog,
    title: "Custom IoT Deployment",
    description: "End-to-end implementation from hardware to cloud platforms.",
    features: ["Hardware installation", "Firmware deployment", "System integration", "Go-live support"],
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description: "IIoT solutions with predictive maintenance and analytics.",
    features: ["SCADA & PLC", "OEE dashboards", "Predictive maintenance", "Compliance reporting"],
  },
  {
    icon: Waves,
    title: "Fisheries Monitoring",
    description: "Scientific monitoring systems for aquaculture operations.",
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
        }, 3000);
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please ensure backend is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const interests = [
    "Smart Home", "Smart Office", "Industrial IoT", 
    "Fisheries Monitoring", "Agriculture IoT", "Healthcare IoT"
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f]/95 via-indigo-900/80 to-purple-900/80 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-sm mx-auto p-8 bg-gradient-to-r from-white/10 to-indigo-500/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-indigo-500/25"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CheckCircle2 className="mx-auto h-20 w-20 text-indigo-400 mb-6 drop-shadow-lg" />
          </motion.div>
          <h2 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            Thank You!
          </h2>
          <p className="text-lg text-indigo-100/90 mb-6 backdrop-blur-sm drop-shadow-md">Your request has been submitted successfully.</p>
          <p className="text-base text-white/90 mb-8 backdrop-blur-sm">We'll contact you within 24 hours.</p>
          <Button 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 h-12 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl shadow-indigo-500/30 border border-white/20 backdrop-blur-sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({ firstName: "", lastName: "", email: "", company: "", interest: "", details: "" });
            }}
          >
            Submit Another
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-slate-900 to-indigo-900/80">
      <Navbar />
      <main className="pt-20">
        {/* HERO SECTION */}
      <section className="py-28 
  bg-gradient-to-br 
  from-[#14053f] 
  via-[#14053f] 
  to-[#14053f] 
  text-white overflow-hidden relative"
>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10" />
  
  <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT - Hero Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <span className="inline-block px-5 py-1.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full text-indigo-200 font-semibold text-xs border border-indigo-400/50 backdrop-blur-sm shadow-lg shadow-indigo-500/25">
                  Enterprise Consultancy
                </span>
                <h1 className="text-4xl lg:text-5xl font-black mt-6 leading-tight bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Expert IoT Consulting
                  <span className="block text-3xl lg:text-4xl bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl">
                    & Implementation
                  </span>
                </h1>
                <p className="text-lg text-indigo-200/95 mt-6 max-w-lg leading-relaxed backdrop-blur-sm drop-shadow-lg">
                  From concept to deployment, our experts guide your digital transformation journey.
                </p>
                <div className="flex flex-wrap gap-4 mt-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-gradient-to-r from-white/20 to-indigo-500/20 backdrop-blur-xl rounded-xl border border-white/30 hover:bg-white/30 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20"
                  >
                    <Building2 className="text-indigo-300 h-5 w-5 flex-shrink-0 drop-shadow-lg" />
                    <span className="text-base font-bold text-white drop-shadow-md">500+ Projects</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 p-4 bg-gradient-to-r from-white/20 to-purple-500/20 backdrop-blur-xl rounded-xl border border-white/30 hover:bg-white/30 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-purple-500/20"
                  >
                    <Users className="text-purple-300 h-5 w-5 flex-shrink-0 drop-shadow-lg" />
                    <span className="text-base font-bold text-white drop-shadow-md">Expert Team</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT - SMALL MacOS Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:translate-y-8"
              >
                <div className={`max-w-lg mx-auto lg:ml-auto bg-gradient-to-br from-white/10 via-indigo-500/5 to-purple-500/5 backdrop-blur-2xl rounded-2xl shadow-2xl border border-indigo-500/40 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.4)] ${
                  error ? 'ring-4 ring-indigo-500/40 animate-pulse shadow-indigo-500/50' : 'shadow-indigo-500/25'
                }`}>
                  
                  {/* MacOS Header */}
                  <div className="flex items-center gap-2 px-6 py-3 border-b border-white/20 bg-gradient-to-r from-white/20 via-transparent to-indigo-500/10 backdrop-blur-xl shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-red-400 to-pink-500 shadow-sm" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-sm" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm" />
                    </div>
                    <div className="ml-auto text-xs font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-1.5 drop-shadow-lg">
                      <Mail className="h-3 w-3" />
                      Consultancy Request
                    </div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    
                    {/* Row 1 - Smaller */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">First Name *</label>
                        <Input 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="h-10 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-indigo-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 focus:ring-offset-0 text-sm rounded-xl shadow-lg px-4 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-indigo-500/10 hover:border-indigo-400/60" 
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">Last Name *</label>
                        <Input 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="h-10 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 focus:ring-offset-0 text-sm rounded-xl shadow-lg px-4 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-purple-400/60" 
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">Work Email *</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-10 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-indigo-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:ring-offset-0 text-sm rounded-xl shadow-lg px-4 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-indigo-500/20 hover:border-indigo-400/60" 
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">Company Name</label>
                      <Input 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="h-10 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 focus:ring-offset-0 text-sm rounded-xl shadow-lg px-4 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-purple-400/60" 
                        placeholder="Tech Corp"
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">Interest Area *</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full h-10 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-indigo-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50 focus:ring-offset-0 text-sm rounded-xl px-4 font-semibold transition-all shadow-lg border-2 bg-gradient-to-r from-white/10 to-indigo-500/10 hover:border-indigo-400/60 appearance-none bg-no-repeat bg-right"
                        required
                      >
                        <option value="">Select Interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label className="text-xs font-bold text-white/95 mb-2 block backdrop-blur-sm">Project Details</label>
                      <Textarea 
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        className="min-h-[80px] bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-indigo-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:ring-offset-0 text-sm rounded-xl px-4 py-3 font-semibold resize-vertical shadow-lg transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-purple-400/60" 
                        placeholder="Describe your project requirements..."
                      />
                    </div>

                    {/* Error Display */}
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-gradient-to-r from-indigo-500/20 to-red-500/20 border border-indigo-500/50 rounded-xl text-indigo-200 backdrop-blur-xl shadow-lg shadow-indigo-500/30"
                      >
                        <div className="flex items-center gap-2">
                          <UserRound className="h-4 w-4 flex-shrink-0 text-indigo-400 drop-shadow-lg" />
                          <span className="font-semibold drop-shadow-md text-sm">{error}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 hover:from-indigo-600 hover:via-purple-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.6)] transition-all duration-300 text-base px-6 transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm shadow-indigo-500/40"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin text-white drop-shadow-lg" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Get Consultation</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 bg-gradient-to-b from-[#0a0a1f]/80 via-slate-900/70 to-slate-950/90">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/10 via-indigo-500/5 to-purple-500/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 hover:bg-white/20 hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.3)] hover:-translate-y-3 transition-all duration-500 hover:border-indigo-500/50 cursor-default shadow-xl shadow-indigo-500/20"
                >
                  <service.icon className="h-12 w-12 bg-gradient-to-br from-indigo-400 to-purple-500 text-white p-2.5 rounded-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg shadow-indigo-500/30 mb-6 drop-shadow-xl" />
                  <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300 drop-shadow-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base text-indigo-200/95 mb-6 leading-relaxed opacity-90 backdrop-blur-sm drop-shadow-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.05 }}
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <div className="h-5 w-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                          <CheckCircle2 className="h-3 w-3 text-white drop-shadow-lg" />
                        </div>
                        <span className="text-white/95 font-semibold backdrop-blur-sm drop-shadow-md text-sm">{feature}</span>
                      </motion.li>
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
