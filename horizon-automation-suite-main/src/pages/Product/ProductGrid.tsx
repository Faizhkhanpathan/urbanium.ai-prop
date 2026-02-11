import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  image: string;
  specs: string[];
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="py-16 bg-[#0A0118]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-[3px] 
                         bg-gradient-to-b 
                         from-white/20 
                         via-[#6A7BFF]/50 
                         to-[#FF66C4]/50 
                         shadow-xl shadow-black/50"
            >
              {/* Inner Card */}
              <div className="group h-full bg-[#0F0124] rounded-[18px] overflow-hidden transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0124] via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 right-3 flex gap-2">
                    {product.useCases.map((useCase) => (
                      <Badge
                        key={useCase}
                        className="text-[10px] uppercase tracking-tighter bg-black/60 backdrop-blur-md border border-white/10 text-white/90"
                      >
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="font-bold text-white mb-2 text-lg group-hover:text-[#6A7BFF] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-white/50 mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-1 text-[10px] rounded bg-white/5 border border-white/5 text-white/40 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-white text-black hover:bg-[#6A7BFF] hover:text-white font-bold transition-all duration-300"
                    >
                      Details
                    </Button>

                    <Link to="/consultancy" className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-[#111111] text-white hover:bg-[#6A7BFF]"
                      >
                        Quote
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
