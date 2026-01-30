import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
