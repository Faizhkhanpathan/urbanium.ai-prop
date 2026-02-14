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
  // Form State
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
      });

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
      <div className="min-h-screen bg-gradient-to-br from-[#14053F]/95 via-pink-900/80 to-purple-900/80 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto p-12 bg-gradient-to-r from-white/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-pink-500/25"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CheckCircle2 className="mx-auto h-24 w-24 text-gradient-pink-purple mb-8 drop-shadow-lg" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Thank You!
          </h2>
          <p className="text-xl text-purple-100/90 mb-8 backdrop-blur-sm drop-shadow-md">Your request has been submitted successfully.</p>
          <p className="text-lg text-white/90 mb-12 backdrop-blur-sm">We'll contact you within 24 hours.</p>
          <Button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl shadow-pink-500/30 border border-white/20 backdrop-blur-sm"
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
    <div className="min-h-screen bg-gradient-to-br from-[#14053F] via-slate-900 to-purple-900/80">
      <Navbar />
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-28 bg-gradient-to-br from-[#14053F]/95 via-purple-900/60 to-pink-900/40 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* LEFT - Hero Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full text-pink-200 font-semibold text-sm border border-pink-400/50 backdrop-blur-sm shadow-lg shadow-pink-500/25">
                  Enterprise Consultancy
                </span>
                <h1 className="text-5xl lg:text-6xl font-black mt-8 leading-tight bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Expert IoT Consulting
                  <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                    & Implementation
                  </span>
                </h1>
                <p className="text-xl text-purple-200/95 mt-8 max-w-xl leading-relaxed backdrop-blur-sm drop-shadow-lg">
                  From concept to deployment, our experts guide your digital transformation journey.
                </p>
                <div className="flex flex-wrap gap-6 mt-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-5 bg-gradient-to-r from-white/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-purple-500/20"
                  >
                    <Building2 className="text-pink-300 h-7 w-7 flex-shrink-0 drop-shadow-lg" />
                    <span className="text-lg font-bold text-white drop-shadow-md">500+ Projects</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3 p-5 bg-gradient-to-r from-white/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-pink-500/20"
                  >
                    <Users className="text-purple-300 h-7 w-7 flex-shrink-0 drop-shadow-lg" />
                    <span className="text-lg font-bold text-white drop-shadow-md">Expert Team</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT - MacOS Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:translate-y-10"
              >
                <div className={`max-w-2xl mx-auto lg:ml-auto bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gradient-pink-purple/40 overflow-hidden transition-all duration-500 hover:shadow-[0_35px_60px_-15px_rgba(236,72,153,0.4)] ${
                  error ? 'ring-4 ring-pink-500/40 animate-pulse shadow-pink-500/50' : 'shadow-gradient-pink-purple'
                }`}>
                  
                  {/* MacOS Header */}
                  <div className="flex items-center gap-3 px-8 py-5 border-b border-white/20 bg-gradient-to-r from-white/20 via-transparent to-purple-500/10 backdrop-blur-xl shadow-sm">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm" />
                    </div>
                    <div className="ml-auto text-sm font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2 drop-shadow-lg">
                      <Mail className="h-4 w-4" />
                      Consultancy Request
                    </div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">First Name *</label>
                        <Input 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="h-14 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl shadow-lg px-5 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-pink-400/60" 
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">Last Name *</label>
                        <Input 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="h-14 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl shadow-lg px-5 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-pink-500/10 hover:border-purple-400/60" 
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">Work Email *</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-14 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-gradient-pink-purple focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl shadow-lg px-5 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-pink-500/20 hover:border-pink-400/60" 
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">Company Name</label>
                      <Input 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="h-14 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl shadow-lg px-5 font-semibold transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-purple-400/60" 
                        placeholder="Tech Corp Inc."
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">Interest Area *</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full h-14 bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl px-5 font-semibold transition-all shadow-lg border-2 bg-gradient-to-r from-white/10 to-pink-500/10 hover:border-pink-400/60 appearance-none bg-no-repeat bg-right"
                        required
                      >
                        <option value="">Select Interest Area</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label className="text-sm font-bold text-white/95 mb-3 block backdrop-blur-sm">Project Details</label>
                      <Textarea 
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        className="min-h-[140px] bg-white/20 backdrop-blur-xl border-white/40 text-white placeholder-purple-300 focus:border-gradient-pink-purple focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-0 focus:ring-offset-transparent rounded-2xl px-5 py-4 font-semibold resize-vertical shadow-lg transition-all border-2 bg-gradient-to-r from-white/10 to-purple-500/10 hover:border-purple-400/60" 
                        placeholder="Describe your project requirements, timeline, budget, and any specific challenges..."
                      />
                    </div>

                    {/* Error Display */}
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-5 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/50 rounded-2xl text-pink-200 backdrop-blur-xl shadow-lg shadow-pink-500/30"
                      >
                        <div className="flex items-center gap-3">
                          <UserRound className="h-5 w-5 flex-shrink-0 text-pink-400 drop-shadow-lg" />
                          <span className="font-semibold drop-shadow-md">{error}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-16 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-700 hover:from-pink-600 hover:via-purple-700 hover:to-pink-800 text-white font-black rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(236,72,153,0.6)] transition-all duration-300 text-xl px-8 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 border border-white/20 backdrop-blur-sm shadow-pink-500/40"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-6 w-6 animate-spin text-white drop-shadow-lg" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Get Free Consultation</span>
                            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
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
        <section className="py-32 bg-gradient-to-b from-[#14053F]/80 via-slate-900/70 to-slate-950/90">
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
                  className="group bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-10 hover:bg-white/20 hover:shadow-[0_35px_60px_-15px_rgba(168,85,247,0.3)] hover:-translate-y-4 transition-all duration-500 hover:border-gradient-pink-purple cursor-default shadow-xl shadow-purple-500/20"
                >
                  <service.icon className="h-14 w-14 bg-gradient-to-br from-pink-400 to-purple-500 text-white p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg shadow-pink-500/30 mb-8 drop-shadow-xl" />
                  <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-300 drop-shadow-2xl">
                    {service.title}
                  </h3>
                  <p className="text-lg text-purple-200/95 mb-8 leading-relaxed opacity-90 backdrop-blur-sm drop-shadow-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIndex) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.05 }}
                        className="flex items-start gap-4 group-hover:translate-x-2 transition-all duration-300"
                      >
                        <div className="h-6 w-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-all duration-300">
                          <CheckCircle2 className="h-4 w-4 text-white drop-shadow-lg" />
                        </div>
                        <span className="text-white/95 font-semibold backdrop-blur-sm drop-shadow-md">{feature}</span>
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
