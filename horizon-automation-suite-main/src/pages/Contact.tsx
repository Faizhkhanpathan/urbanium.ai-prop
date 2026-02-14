import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0121] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6A7BFF]/20 via-[#14053F] to-[#FF66C4]/20 blur-3xl opacity-60" />

      <div className="relative z-10 container mx-auto px-6 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#FF66C4] to-[#6A7BFF] bg-clip-text text-transparent">
            Let's Build Something Powerful
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Reach out to Urbanium and let's create intelligent systems,
            web platforms, and next-gen automation together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-[#6A7BFF]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-white/60">contact@urbanium.ai</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#FF66C4]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-white/60">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#6A7BFF]" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-white/60">Mumbai, India</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-2xl shadow-2xl"
          >

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-white text-black"
            />

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-white text-black"
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="bg-white text-black"
            />

            <Button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-[#FF66C4] to-[#6A7BFF] hover:scale-105 transition-transform"
            >
              Send Message <Send className="ml-3 h-5 w-5" />
            </Button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm text-center"
              >
                🚀 Message sent successfully!
              </motion.div>
            )}

          </motion.form>

        </div>
      </div>
    </div>
  );
}
