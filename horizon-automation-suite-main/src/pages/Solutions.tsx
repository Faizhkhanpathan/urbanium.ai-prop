import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building2, 
  Landmark, 
  Trees, 
  Factory, 
  Waves,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const solutions = [
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home Automation Solutions",
    description: "Transform your living space into an intelligent ecosystem with voice-activated controls, automated lighting, climate management, and comprehensive security systems.",
    features: [
      "Voice-activated lighting and climate control",
      "Automated blinds and curtain systems",
      "Smart security with facial recognition",
      "Energy consumption monitoring",
      "Multi-room audio systems",
      "Scene-based automation",
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    id: "smart-office",
    icon: Building2,
    title: "Smart Office Automation Solutions",
    description: "Enhance workplace productivity with intelligent meeting rooms, occupancy-based systems, and seamless integration across all office facilities.",
    features: [
      "Occupancy-based lighting & HVAC",
      "Smart conference room booking",
      "Access control integration",
      "Air quality monitoring",
      "Desk booking systems",
      "Energy analytics dashboard",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: "smart-corporate",
    icon: Landmark,
    title: "Smart Corporate Automation Solutions",
    description: "Enterprise-grade building management for large corporate campuses with centralized control, advanced analytics, and multi-site coordination.",
    features: [
      "Centralized BMS integration",
      "Multi-building coordination",
      "Predictive maintenance alerts",
      "Visitor management systems",
      "Emergency response automation",
      "Sustainability reporting",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    id: "free-space",
    icon: Trees,
    title: "Smart Free-Space Automation Solutions",
    description: "Intelligent management for outdoor spaces including parks, stadiums, and public venues with weather-adaptive systems and crowd management.",
    features: [
      "Weather-adaptive lighting",
      "Smart irrigation systems",
      "Crowd density monitoring",
      "Public safety integration",
      "Event management automation",
      "Environmental monitoring",
    ],
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=400&fit=crop",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Smart Industrial Automation Solutions",
    description: "IIoT solutions for manufacturing excellence with real-time monitoring, predictive maintenance, and process optimization capabilities.",
    features: [
      "Real-time production monitoring",
      "Predictive maintenance",
      "OEE optimization",
      "Quality control automation",
      "Supply chain integration",
      "Safety compliance monitoring",
    ],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
  },
  {
    id: "fisheries",
    icon: Waves,
    title: "Smart Fisheries & Water Monitoring Solutions",
    description: "Scientific-grade aquaculture monitoring with comprehensive water quality sensors, automated feeding systems, and environmental analytics.",
    features: [
      "pH level monitoring",
      "Dissolved oxygen tracking",
      "Water temperature control",
      "Turbidity measurement",
      "Automated feeding systems",
      "Mortality prediction AI",
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Comprehensive IoT Solutions for Every Industry
              </h1>
              <p className="text-xl text-slate-300">
                From smart homes to industrial facilities, we deliver tailored automation 
                solutions that drive efficiency, sustainability, and intelligent operations.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div 
                  key={solution.id}
                  id={solution.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                      <solution.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {solution.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <Link to="/consultancy">
                        <Button variant="teal">
                          Request Consultancy
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/products">
                        <Button variant="outline">
                          View Products
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our automation experts will help you design the perfect IoT solution 
              tailored to your specific needs and requirements.
            </p>
            <Link to="/consultancy">
              <Button variant="glass" size="xl">
                Talk to Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
