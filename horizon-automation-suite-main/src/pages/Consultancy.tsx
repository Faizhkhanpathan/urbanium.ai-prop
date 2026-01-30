import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Compass,
  Cog,
  Factory,
  Waves,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Award,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const services = [
  {
    icon: Compass,
    title: "System Design & Architecture",
    description:
      "Our expert architects design scalable, secure IoT ecosystems.",
    features: [
      "Requirements analysis",
      "Architecture blueprints",
      "Security planning",
      "Technology selection",
    ],
  },
  {
    icon: Cog,
    title: "Custom IoT Deployment",
    description:
      "End-to-end implementation from hardware to cloud platforms.",
    features: [
      "Hardware installation",
      "Firmware deployment",
      "System integration",
      "Go-live support",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description:
      "IIoT solutions with predictive maintenance and analytics.",
    features: [
      "SCADA & PLC",
      "OEE dashboards",
      "Predictive maintenance",
      "Compliance reporting",
    ],
  },
  {
    icon: Waves,
    title: "Fisheries Monitoring",
    description:
      "Scientific monitoring systems for aquaculture operations.",
    features: [
      "Water quality sensors",
      "Disease prediction",
      "Remote monitoring",
      "Regulatory reporting",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

const Consultancy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* ================= HERO ================= */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/50 to-indigo-900/30 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-accent font-semibold text-sm">
                  Enterprise Consultancy
                </span>

                <h1 className="text-6xl font-black mt-6 leading-tight">
                  Expert IoT Consulting
                  <span className="block text-accent text-5xl">
                    & Implementation
                  </span>
                </h1>

                <p className="text-xl text-slate-300 mt-8 max-w-xl">
                  From concept to deployment, our experts guide your
                  digital transformation journey.
                </p>

                <div className="flex gap-6 mt-10">
                  <div className="flex items-center gap-2">
                    <Building2 className="text-accent" />
                    <span>500+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-accent" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-accent" />
                    <span>ISO Certified</span>
                  </div>
                </div>
              </div>

              {/* ================= DESKTOP MAC FORM ================= */}
              <div className="hidden lg:block">
                <div className="max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

                  {/* macOS header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-50">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  {/* Form */}
                  <form className="p-6 space-y-5 text-gray-900">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">First Name</label>
                        <Input className="mt-1 bg-gray-100 h-11 rounded-lg focus:bg-white" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Last Name</label>
                        <Input className="mt-1 bg-gray-100 h-11 rounded-lg focus:bg-white" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Work Email</label>
                      <Input type="email" className="mt-1 bg-gray-100 h-11 rounded-lg focus:bg-white" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Company Name</label>
                      <Input className="mt-1 bg-gray-100 h-11 rounded-lg focus:bg-white" />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Interest</label>
                      <select className="mt-1 w-full bg-gray-100 h-11 rounded-lg px-3 focus:bg-white">
                        <option>Select Interest</option>
                        <option>Smart Home</option>
                        <option>Smart Office</option>
                        <option>Industrial IoT</option>
                        <option>Fisheries Monitoring</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Project Details</label>
                      <Textarea className="mt-1 bg-gray-100 rounded-lg min-h-[100px] focus:bg-white" />
                    </div>

                    <div className="flex justify-end gap-3 pt-3">
                      <Button variant="outline" className="rounded-full">
                        Cancel
                      </Button>
                      <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                        Save
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-3xl border p-10 hover:shadow-2xl transition"
                >
                  <service.icon className="h-10 w-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <CheckCircle2 className="text-accent h-5 w-5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
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
