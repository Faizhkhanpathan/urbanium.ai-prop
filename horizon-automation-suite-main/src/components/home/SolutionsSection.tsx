import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "AUTOMATION",
    description:
      "Transform your living space with intelligent lighting, climate control, security systems, and voice-activated automation.",
    tags: ["Residential", "Voice Control", "Energy Saving"],
    gradient: "from-blue-500 to-cyan-500",
    images: [
      "https://hbr.org/resources/images/article_assets/2024/06/Automation-by-Broadcom-AI-WLA-Hero-Image-1200x675-1.png",
      "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2024/02/26091442/Shutterstock_1133982038.jpg",
      "https://automationedge.com/es/wp-content/uploads/2018/02/8.jpg",
    ],
  },
  {
    title: "WEB DEV & APPS",
    description:
      "Boost productivity with automated meeting rooms, occupancy-based lighting, and integrated building management systems.",
    tags: ["Corporate", "Productivity", "HVAC"],
    gradient: "from-violet-500 to-purple-500",
    images: [
      "https://devexhub.com/blog_images/1721899805_Web%20development%20services.png",
      "https://www.fidelsoftech.com//wp-content/uploads/2025/04/AI-Enabled-Web-Development-Services.jpg",
      "https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Thumbnail-default-668-1.jpg",
    ],
  },
  {
    title: "PRODUCTS",
    description:
      "Enterprise-grade automation for large campuses with centralized control, analytics, and energy optimization.",
    tags: ["Enterprise", "Analytics", "Scalable"],
    gradient: "from-amber-500 to-orange-500",
    images: [
      "https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Thumbnail-default-668-1.jpg",
      "https://www.differencebetween.net/wp-content/uploads/2017/10/Difference-between-product-and-service-1.jpg",
      "https://blog.planview.com/wp-content/uploads/2022/05/iStock-1293656833-1024x585.jpg",
    ],
  },
];

export function SolutionsSection() {
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navigate = useNavigate();

  // rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((idx, i) => (idx + 1) % solutions[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreAction = (index: number, action: string) => {
    const baseHash = solutions[index].title.toLowerCase().replace(/\s+/g, "-");

    if (action === "details") {
      navigate(`/solutions#${baseHash}`);
    }
    if (action === "book-demo") {
      navigate(`/consultancy?topic=${encodeURIComponent(solutions[index].title)}`);
    }
    if (action === "download") {
      navigate(`/resources/${baseHash}`);
    }
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
          <h2 className="mt-3 mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive IoT Solutions for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential spaces to industrial facilities, we deliver tailored automation
            solutions that drive efficiency and intelligence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="
                group relative overflow-hidden rounded-2xl border border-border bg-card
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-1.5 bg-gradient-to-r ${solution.gradient}`} />

              {/* Card body */}
              <div className="flex h-full min-h-[400px] flex-col p-7">
                {/* Image carousel */}
                <div className="mb-5 relative h-80 w-810 overflow-hidden rounded-xl">
                  <div className="absolute inset-0">
                    {solution.images.map((imgSrc, imgIndex) => (
                      <img
                        key={`${solution.title}-${imgIndex}`}
                        src={imgSrc}
                        alt={`${solution.title} - ${imgIndex + 1}`}
                        className={`
                          absolute inset-0 h-full w-full rounded-xl object-cover
                          transition-all duration-500 ease-in-out
                          ${
                            currentImages[index] === imgIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                  {solution.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {solution.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Scoring (rating) */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    4.8 / 5 · 120+ projects
                  </span>
                </div>

                {/* CTA with one dropdown: "Explore" */}
                <div className="mt-auto relative">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === index ? null : index))
                    }
                  >
                    Explore
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-90" : ""
                      }`}
                    />
                  </Button>

                  {/* Dropdown menu */}
                  <div
                    className={`
                      absolute left-0 mt-2 w-52 rounded-xl border border-border bg-popover shadow-lg
                      text-xs sm:text-sm
                      transition-all duration-200 origin-top
                      ${
                        openDropdown === index
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-95 opacity-0"
                      }
                    `}
                  >
                    <button
                      className="block w-full px-4 py-2 text-left text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => handleExploreAction(index, "details")}
                    >
                      View details
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => handleExploreAction(index, "book-demo")}
                    >
                      Book a demo
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => handleExploreAction(index, "download")}
                    >
                      Download brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <Link to="/consultancy">
            <Button variant="teal" size="lg">
              Talk to Our Automation Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
