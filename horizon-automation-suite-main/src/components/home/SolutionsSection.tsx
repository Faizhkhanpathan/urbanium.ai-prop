import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "AUTOMATION",
    description:
      "Transform your living space with intelligent lighting, climate control, security systems, and automation.",
    tags: ["Residential", "Industrial", "Energy Saving"],
    gradient: "from-blue-500 to-cyan-500",
    images: [
      "https://hbr.org/resources/images/article_assets/2024/06/Automation-by-Broadcom-AI-WLA-Hero-Image-1200x675-1.png",
      "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2024/02/26091442/Shutterstock_1133982038.jpg",
      "https://automationedge.com/es/wp-content/uploads/2018/02/8.jpg",
    ],
    explore: [
      { label: "Home Automation", action: "home-automation" },
      { label: "Industrial Automation", action: "industrial-automation" },
      { label: "Free Automation Consultation", action: "free-automation" },
    ],
  },
  {
    title: "WEB & APP SERVICES",
    description:
      "Modern web, mobile, and AI-driven applications built for performance, security, and scale.",
    tags: ["Web", "Apps", "AI", "Security"],
    gradient: "from-violet-500 to-purple-500",
    images: [
      "https://devexhub.com/blog_images/1721899805_Web%20development%20services.png",
      "https://www.fidelsoftech.com/wp-content/uploads/2025/04/AI-Enabled-Web-Development-Services.jpg",
      "https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Thumbnail-default-668-1.jpg",
    ],
    explore: [
      { label: "Web Development", action: "web-dev" },
      { label: "App Development", action: "app-dev" },
      { label: "AI Integration", action: "ai-integration" },
      { label: "AI Analysis", action: "ai-analysis" },
      { label: "Security Solutions", action: "security" },
    ],
  },
  {
    title: "PRODUCTS",
    description:
      "Smart products designed for automation, energy efficiency, and intelligent monitoring.",
    tags: ["Solar", "IoT", "Smart Devices"],
    gradient: "from-amber-500 to-orange-500",
    images: [
      "https://blog.planview.com/wp-content/uploads/2022/05/iStock-1293656833-1024x585.jpg",
      "https://www.differencebetween.net/wp-content/uploads/2017/10/Difference-between-product-and-service-1.jpg",
      "https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Thumbnail-default-668-1.jpg",
    ],
    explore: [
      { label: "Auto Solar Products", action: "auto-solar" },
      { label: "Smart Automation Devices", action: "smart-devices" },
      { label: "App-based Monitoring", action: "app-monitoring" },
      { label: "Custom IoT Products", action: "custom-iot" },
    ],
  },
];

export function SolutionsSection() {
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((idx, i) => (idx + 1) % solutions[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = (solutionTitle: string, action: string) => {
    navigate(
      `/consultancy?service=${encodeURIComponent(
        solutionTitle
      )}&type=${encodeURIComponent(action)}`
    );
    setOpenDropdown(null);
  };

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Solutions
          </span>
          <h2 className="mt-3 mb-4 text-3xl font-bold md:text-4xl">
            Smart Solutions Built for the Future
          </h2>
          <p className="text-lg text-muted-foreground">
            Automation, digital products, and intelligent systems tailored for
            real-world impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient */}
              <div className={`h-1.5 bg-gradient-to-r ${solution.gradient}`} />

              {/* Explore Button */}
              <div className="absolute right-4 top-4 z-20">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center gap-2"
                >
                  Explore
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openDropdown === index ? "rotate-90" : ""
                    }`}
                  />
                </Button>

                {/* Dropdown with animation */}
                <div
                  className={`absolute right-0 mt-3 w-60 rounded-xl border bg-popover shadow-xl
                  transition-all duration-300 origin-top
                  ${
                    openDropdown === index
                      ? "opacity-100 scale-100 translate-y-0"
                      : "pointer-events-none opacity-0 scale-95 -translate-y-2"
                  }`}
                >
                  {solution.explore.map((item) => (
                    <button
                      key={item.action}
                      onClick={() =>
                        handleExplore(solution.title, item.action)
                      }
                      className="block w-full px-4 py-2.5 text-left text-sm hover:bg-muted transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex min-h-[450px] flex-col p-7 pt-14">
                {/* Images */}
                <div className="mb-5 relative h-60 overflow-hidden rounded-xl">
                  {solution.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        currentImages[index] === i
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {solution.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {solution.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto text-xs text-muted-foreground">
                  ★★★★★ 4.8 / 5 · Trusted by 120+ clients
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link to="/consultancy">
            <Button variant="teal" size="lg">
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
