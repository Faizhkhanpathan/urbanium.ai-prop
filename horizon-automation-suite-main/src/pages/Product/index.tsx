import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {motion} from "framer-motion";
import { 
  ToggleLeft, 
  Lightbulb, 
  Cpu, 
  Waves, 
  Radio, 
  Filter 
} from "lucide-react";

// Local Component Imports
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";
import { ProductsCTA } from "./ProductsCTA";

const categories = [
  { id: "all", name: "All Products", icon: Filter },
  { id: "switches", name: "Smart Switches", icon: ToggleLeft },
  { id: "lights", name: "Smart Lights", icon: Lightbulb },
  { id: "controllers", name: "Controllers & Gateways", icon: Cpu },
  { id: "fisheries", name: "Fisheries IoT", icon: Waves },
  { id: "sensors", name: "Sensors & Modules", icon: Radio },
];

/*motion*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


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
    <div className="min-h-screen bg-[#14053F]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 bg-[#0A0118] text-white overflow-hidden">

  {/* --- BACKGROUND GRID EFFECT --- */}
  <div className="absolute inset-0 z-0">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(106, 123, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(106, 123, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        maskImage: "radial-gradient(circle at center, black, transparent 80%)",
        transform:
          "perspective(1200px) rotateX(50deg) translateY(-20px) scale(1.5)",
        transformOrigin: "top",
      }}
    />
  </div>

  {/* --- AMBIENT GLOW BLOOMS --- */}
  <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#6A7BFF]/10 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-[#FF66C4]/10 blur-[100px] rounded-full pointer-events-none" />

  {/* --- CONTENT --- */}
  {/* --- CONTENT --- */}
<div className="container mx-auto px-6 lg:px-12 relative z-10">
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="max-w-3xl"
  >

    {/* Tagline */}
    <motion.div variants={itemVariants} className="mb-5">
      <span className="px-3.5 py-1 text-[20px] uppercase tracking-[0.3em] font-bold rounded-md bg-white/5 border border-white/10">
        <span className="bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] bg-clip-text text-transparent">
          Product Catalog
        </span>
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      variants={itemVariants}
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6"
    >
      Enterprise-Grade <br />
      <span className="relative inline-block">
        IoT Devices
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#6A7BFF]/40 to-transparent"
        />
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={itemVariants}
      className="text-sm md:text-base text-white/40 max-w-lg leading-relaxed font-normal mb-8"
    >
      From intelligent automation hardware to specialized monitoring systems,
       Urbanium delivers reliable technology products designed for connected homes, 
       smart offices, and industrial environments.
    </motion.p>

    {/* Footer Micro Text */}
    <motion.div variants={itemVariants}>
      <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 font-semibold">
Durability × Integration × Future-Readiness      </span>
    </motion.div>

  </motion.div>
</div>

</section>


        {/* Categories Section */}
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Results Section */}
        <ProductGrid products={filteredProducts} />

        {/* Footer CTA Section */}
        <ProductsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Products;