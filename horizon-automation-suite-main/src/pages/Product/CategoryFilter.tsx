import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export function CategoryFilter({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    /* CHANGE: Fixed top-0 and z-50. 
       This ensures when you scroll, it covers the Navbar (usually z-40).
    */
    <section className="sticky top-0 z-50 py-4 bg-[#0A0118] backdrop-blur-xl border-b border-white/[0.08]">
      <div className="container mx-auto px-6">
        
        <div className="relative flex items-center justify-start md:justify-center overflow-x-auto scrollbar-hide py-2">
          
          {/* 💡 FUTURE PROOF: Add categories to index.tsx to expand this list */}
          <div className="flex gap-1 bg-white/[0.03] p-1 rounded-2xl border border-white/[0.08] min-w-max shadow-2xl">
            
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-2.5 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 outline-none ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {/* Sliding Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] rounded-xl shadow-lg shadow-[#6A7BFF]/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <category.icon 
                    className={`relative z-10 h-4 w-4 transition-colors duration-300 ${
                      isActive ? "text-white" : "group-hover:text-[#6A7BFF]"
                    }`} 
                  />
                  
                  <span className="relative z-10 tracking-tight whitespace-nowrap">
                    {category.name}
                  </span>

                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              );
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
}