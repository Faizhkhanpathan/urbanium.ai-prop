import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ToggleLeft, 
  Lightbulb, 
  Cpu, 
  Waves, 
  Radio,
  ArrowRight,
  Filter
} from "lucide-react";

const categories = [
  { id: "all", name: "All Products", icon: Filter },
  { id: "switches", name: "Smart Switches", icon: ToggleLeft },
  { id: "lights", name: "Smart Lights", icon: Lightbulb },
  { id: "controllers", name: "Controllers & Gateways", icon: Cpu },
  { id: "fisheries", name: "Fisheries IoT", icon: Waves },
  { id: "sensors", name: "Sensors & Modules", icon: Radio },
];

const products = [
  {
    id: 1,
    name: "ProSwitch 4G Smart Touch Panel",
    category: "switches",
    description: "4-gang capacitive touch switch with voice control support and energy monitoring. Compatible with Alexa, Google Home, and Siri.",
    useCases: ["Home", "Office"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    specs: ["WiFi + BLE", "10A per gang", "Glass Panel"],
  },
  {
    id: 2,
    name: "ProSwitch 8G Modular Controller",
    category: "switches",
    description: "Industrial-grade 8-channel relay module with DIN rail mounting and RS485 communication for building automation.",
    useCases: ["Office", "Industrial"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    specs: ["RS485/Modbus", "16A per channel", "DIN Rail"],
  },
  {
    id: 3,
    name: "LumiPro RGBW Smart Bulb",
    category: "lights",
    description: "12W smart LED bulb with 16 million colors, tunable white (2700K-6500K), and circadian rhythm support.",
    useCases: ["Home", "Office"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    specs: ["1200 Lumens", "E27/B22", "25000 hrs"],
  },
  {
    id: 4,
    name: "LumiStrip Pro LED Controller",
    category: "lights",
    description: "4-channel LED strip controller supporting RGBW, CCT, and single-color strips with music sync capability.",
    useCases: ["Home", "Office", "Industrial"],
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop",
    specs: ["4x5A channels", "DMX512", "WiFi/BLE"],
  },
  {
    id: 5,
    name: "IoTHub Pro Gateway",
    category: "controllers",
    description: "Enterprise-grade IoT gateway with multi-protocol support (Zigbee, Z-Wave, WiFi, BLE) and edge computing capability.",
    useCases: ["Office", "Industrial"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    specs: ["Quad-core ARM", "4GB RAM", "PoE"],
  },
  {
    id: 6,
    name: "MicroController ESP32 Module",
    category: "controllers",
    description: "Compact WiFi + BLE controller for DIY automation projects with GPIO, I2C, SPI, and UART interfaces.",
    useCases: ["Home", "Office", "Industrial"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    specs: ["Dual-core 240MHz", "520KB SRAM", "OTA"],
  },
  {
    id: 7,
    name: "AquaSense Pro Multi-Parameter Probe",
    category: "fisheries",
    description: "Industrial-grade water quality sensor measuring pH, dissolved oxygen, temperature, turbidity, and conductivity in real-time.",
    useCases: ["Fisheries"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    specs: ["5 Parameters", "IP68", "RS485/4-20mA"],
  },
  {
    id: 8,
    name: "AquaMonitor IoT Station",
    category: "fisheries",
    description: "Complete aquaculture monitoring station with solar power, cellular connectivity, and cloud dashboard integration.",
    useCases: ["Fisheries"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    specs: ["Solar + Battery", "4G LTE", "LoRa"],
  },
  {
    id: 9,
    name: "TempSense Pro Wireless",
    category: "sensors",
    description: "Wireless temperature and humidity sensor with LoRaWAN connectivity and 5-year battery life for industrial monitoring.",
    useCases: ["Office", "Industrial"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
    specs: ["-40°C to 85°C", "±0.3°C", "LoRaWAN"],
  },
  {
    id: 10,
    name: "MotionDetect PIR Sensor",
    category: "sensors",
    description: "High-sensitivity PIR motion sensor with pet immunity, adjustable sensitivity, and Zigbee 3.0 connectivity.",
    useCases: ["Home", "Office"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
    specs: ["12m range", "110° FOV", "Zigbee 3.0"],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Catalog</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Enterprise-Grade IoT Devices
              </h1>
              <p className="text-xl text-slate-300">
                Explore our comprehensive range of smart switches, controllers, sensors, 
                and specialized fisheries monitoring equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-1">
                      {product.useCases.map((useCase) => (
                        <Badge key={useCase} variant="secondary" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec) => (
                        <span 
                          key={spec}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="teal" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Link to="/consultancy">
                        <Button variant="outline" size="sm">
                          Request Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team can design and manufacture custom IoT devices 
              tailored to your specific requirements.
            </p>
            <Link to="/consultancy">
              <Button variant="teal" size="lg">
                Request Consultancy
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

export default Products;
