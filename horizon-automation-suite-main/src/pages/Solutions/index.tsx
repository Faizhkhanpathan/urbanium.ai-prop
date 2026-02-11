import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "./HeroSection";
import { SolutionSection } from "./SolutionSection";
import { CTAsection } from "./CTAsection";

import {
  Home,
  Building2,
  Factory,
} from "lucide-react";

const solutions = [
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home Automation Solutions",
    description:
      "Transform your living space into an intelligent ecosystem with voice-activated controls.",
    features: [
      "Voice-activated lighting",
      "Automated blinds",
      "Smart security",
    ],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    id: "smart-office",
    icon: Building2,
    title: "Smart Office Automation Solutions",
    description:
      "Enhance workplace productivity with intelligent systems.",
    features: [
      "Smart HVAC",
      "Access control",
      "Energy analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Smart Industrial Automation Solutions",
    description:
      "IIoT solutions for manufacturing excellence.",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "OEE optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#14053F]">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <SolutionSection solutions={solutions} />
        <CTAsection />
      </main>
      <Footer />
    </div>
  );
}
