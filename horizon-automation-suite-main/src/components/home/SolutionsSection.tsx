import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const BRANDS = [
  "TATA",
  "Reliance",
  "Mahindra",
  "L&T",
  "Amazon",
  "Google",
  "Microsoft",
  "Intel",
];

const CARDS = [
  {
    area: "div1",
    title: "Technology Consulting",
    desc:
      "We guide businesses in choosing and implementing the right technology solutions. and Turn ideas into structured, scalable, and profitable technology systems.",
    images: [
      "images\\slideshow\\div-1\\3rd.png",
      "images\\slideshow\\div-1\\2nd.png",
      "images\\slideshow\\div-1\\1st.png",
    ],
  },
  {
    area: "div2",
    title: "Web & Application Development",
    desc: "We design and develop modern, scalable digital platforms for businesses.",
    images: [
      "images\\slideshow\\div-2\\1st.png",
      "images\\slideshow\\div-2\\2nd.png",
      "images\\slideshow\\div-2\\3rd.png",
    ],
  },
  {
    area: "div3",
    title: "IOT devices",
    desc:
      "Provide reliable hardware solutions integrated with intelligent software systems.",
    images: [
      "images\\slideshow\\div-3\\1st.png",
      "images\\slideshow\\div-3\\2nd.png",
    ],
  },
  {
    area: "div5",
    title: "Home automation",
    desc:
      "We provide intelligent home automation solutions for modern living. and Make homes safer, smarter, and energy efficient.",
    images: [
      "images\\slideshow\\div-5\\1st.png",
      "images\\slideshow\\div-5\\2nd.png",
      "images\\slideshow\\div-5\\3rd.png",
    ],
  },
  {
    area: "div4",
    title: "Office automation",
    desc:
      "We transform traditional offices into smart, automated workspaces.",
    images: [
      "images\\slideshow\\div-4\\1st.png",
      "images\\slideshow\\div-4\\2nd.png",
    ],
  },
];

type Project = {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};



const PROJECTS: Project[] = [
  {
    title: "AI Infrastructure Platform",
    category: "Artificial Intelligence",
    imageUrl:
      "images\\solution-section\\testemonial\\1.png",
    description:
      "Scalable AI systems designed for real-time enterprise intelligence.",
  },
  {
    title: "Cloud Automation Engine",
    category: "Cloud Computing",
    imageUrl:
      "images\\solution-section\\testemonial\\2.png",
    description:
      "Secure and scalable orchestration architecture for modern enterprises.",
  },
  {
    title: "Healthcare AI Diagnostics",
    category: "HealthTech",
    imageUrl:
      "images\\solution-section\\testemonial\\3.png",
    description:
      "Advanced medical imaging and predictive diagnostics powered by AI.",
  },
];


/* ---------------- COMPONENT ---------------- */

export function SolutionsSection() {

  /*slide show bottom*/
  /* ================= PROJECT SLIDESHOW ================= */

const [[slideIndex, direction], setSlideIndex] = useState<[number, number]>([0, 0]);
const [isHovered, setIsHovered] = useState(false);

const paginate = (newDirection: number) => {
  setSlideIndex(([prev]) => {
    const newIndex =
      (prev + newDirection + PROJECTS.length) % PROJECTS.length;
    return [newIndex, newDirection];
  });
};

useEffect(() => {
  if (isHovered) return;

  const timer = setTimeout(() => {
    paginate(1);
  }, 5000);

  return () => clearTimeout(timer);
}, [slideIndex, isHovered]);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1.02,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

  /**/
  const cardsRef = useRef([]);
  const [activeImage, setActiveImage] = useState(
    CARDS.map(() => 0)
  );

  /* Image slideshow */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev.map((v, i) => (v + 1) % CARDS[i].images.length)
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  /* Scroll reveal for 2nd section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "in-view",
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(
      ".feature-text, .feature-image"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  /* Scroll animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("in-view", e.isIntersecting)
        ),
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 bg-[#14053F] overflow-hidden">

      {/* GLOBAL PARTNERS */}
      <div className="relative -mt-16 mb-28 overflow-hidden">
        <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/50 mb-6">
          Global Partners
        </p>
        <div className="animate-partners flex gap-24 px-10 whitespace-nowrap">
          {BRANDS.concat(BRANDS).map((b, i) => (
            <span
              key={i}
              className="text-white/35 text-xl font-semibold hover:text-white transition"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6">

        <div className="editorial-grid">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`card ${card.area}`}
            >
              {/* Images */}
              {card.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`bg-img ${
                    activeImage[i] === idx ? "show" : ""
                  }`}
                />
              ))}

              {/* Gradient hover */}
              <div className="hover-gradient" />

              {/* Content */}
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="cta">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
{/* ================= FEATURE 1st HIGHLIGHT SECTION ================= */}
<div className="container mx-auto px-6 mt-28">
  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* TEXT SIDE */}
    <div className="space-y-5 max-w-xl feature-text lg:order-1">

<p className="inline-block px-4 py-1.5 text-sm uppercase tracking-widest font-semibold reveal
  text-white
  bg-gradient-to-r from-[#6A7BFF]/90 to-[#FF66C4]/90
  rounded-full
  shadow-[0_8px_30px_rgba(106,123,255,0.35)]
">        Why Urbanium
      </p>

      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight reveal">
        Engineering Intelligence That Scales With You
      </h2>

      <p className="text-white/70 text-base leading-relaxed reveal">
        We design intelligent systems that seamlessly integrate AI, IoT,
        and cloud platforms — delivering real-world impact across
        enterprises and smart environments.
      </p>

      <ul className="space-y-2 text-white/75 text-sm">
        <li className="reveal">• AI-powered automation frameworks</li>
        <li className="reveal">• Secure & scalable cloud-native systems</li>
        <li className="reveal">• Industry-grade deployment</li>
      </ul>

      <div className="reveal">
        <Link to="/consultancy">
          <Button
            size="lg"
            className="
  mt-3
  relative
  border border-white/60
  text-white
  bg-transparent
  overflow-hidden
  z-10

  before:absolute before:inset-0
  before:bg-gradient-to-r before:from-[#0892d0] before:to-[#4b0082]
  before:translate-x-[-100%]
  before:transition-transform before:duration-500 before:ease-out
  before:-z-10

  hover:before:translate-x-0
  hover:border-transparent
"

          >
            Discover Our Approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

    </div>

    {/* IMAGE RIGHT */}
    <div className="relative h-[300px] rounded-2xl overflow-hidden feature-image image-strip lg:order-2">
      <div className="image-tile">
        <img src="images\text_images(RL)\why-urbanium\1st.png" />
        <div className="image-overlay">
          <h4>AI Infrastructure</h4>
          <p>Scalable intelligent systems</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="https://media.istockphoto.com/id/1303835958/photo/african-american-it-engineer-in-data-center.jpg?s=612x612&w=0&k=20&c=gLWeflgvSpkt2avG8mgWAzq66uIbqbnwv-gCJ14GeK4="/>
        <div className="image-overlay">
          <h4>Secure System Architecture</h4>
          <p>Built to scale safely.</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="images\text_images(RL)\why-urbanium\3rd.png"/>
        <div className="image-overlay">
          <h4>Data Intelligence</h4>
          <p>Real-time analytics & insights</p>
        </div>
      </div>
    </div>

  </div>
</div>
{/* ================= FEATURE 2nd HIGHLIGHT SECTION ================= */}
<div className="container mx-auto px-6 mt-28">
  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* IMAGE LEFT */}
    <div className="relative h-[300px] rounded-2xl overflow-hidden feature-image image-strip lg:order-1">
      <div className="image-tile">
        <img src="images\text_images(RL)\our-approach\1st.png"/>
        <div className="image-overlay">
          <h4>Understanding Your Vision</h4>
          <p>We analyze your goals, workflows, 
            and long-term growth strategy to design systems that truly fit your business.</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="images\text_images(RL)\our-approach\2nd.png"/>
        <div className="image-overlay">
          <h4>Smart Technology Integration</h4>
          <p>Secure systems designed to evolve as you scale.</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="images\text_images(RL)\our-approach\3rd.png"/>
        <div className="image-overlay">
          <h4> Scalable Architecture</h4>
          <p>Real-time analytics & insights</p>
        </div>
      </div>
    </div>

    {/* TEXT RIGHT */}
    <div className="space-y-5 max-w-xl feature-text lg:order-2">
<p className="inline-block px-4 py-1.5 text-sm uppercase tracking-widest font-semibold reveal
  text-white
  bg-gradient-to-r from-[#6A7BFF]/90 to-[#FF66C4]/90
  rounded-full
  shadow-[0_8px_30px_rgba(106,123,255,0.35)]
">        Our approach
      </p>

      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight reveal">
    Building Smart Systems That Grow With You
      </h2>

      <p className="text-white/70 text-base leading-relaxed reveal">
        At Urbanium, we believe great technology starts with understanding people. Whether it’s a startup, 
        enterprise, home, or office — every solution we build is designed to be intelligent, scalable, and future-ready.
      </p>

      <ul className="space-y-2 text-white/75 text-sm">
        <li className="reveal">•Understanding your goals, workflows, and growth vision</li>
    <li className="reveal">•Scalable, secure architecture for web and automation systems</li>
    <li className="reveal">•High-performance development and smart technology integration</li>

      </ul>

      {/* <div className="reveal">
        <Link to="/consultancy">
          <Button
            size="lg"
            className="mt-3 bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] text-white shadow-[0_18px_40px_rgba(255,102,196,0.3)] hover:shadow-[0_26px_60px_rgba(106,123,255,0.45)]"
          >
            Discover Our Approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div> */}
    </div>

  </div>
</div>
{/* ================= FEATURE 3rd HIGHLIGHT SECTION ================= */}
<div className="container mx-auto px-6 mt-28">
  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* TEXT LEFT */}
    <div className="space-y-5 max-w-xl feature-text lg:order-1">
<p className="inline-block px-4 py-1.5 text-sm uppercase tracking-widest font-semibold reveal
  text-white
  bg-gradient-to-r from-[#6A7BFF]/90 to-[#FF66C4]/90
  rounded-full
  shadow-[0_8px_30px_rgba(106,123,255,0.35)]
">        What makes us diffrent
      </p>

      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight reveal">
    Built With Purpose. Engineered For Longevity.
      </h2>

      <p className="text-white/70 text-base leading-relaxed reveal">
        We don’t just deliver projects — we build intelligent systems designed 
    to perform reliably in real environments. From digital platforms to 
    smart automation, every solution is structured for long-term impact.
      </p>

      <ul className="space-y-2 text-white/75 text-sm">
    <li className="reveal">• Security integrated into every layer of development</li>
    <li className="reveal">• Real-world tested systems, not theoretical concepts</li>
    <li className="reveal">• Long-term partnership mindset with ongoing support</li>

      </ul>

      {/* <div className="reveal">
        <Link to="/consultancy">
          <Button
            size="lg"
            className="mt-3 bg-gradient-to-r from-[#6A7BFF] to-[#FF66C4] text-white shadow-[0_18px_40px_rgba(255,102,196,0.3)] hover:shadow-[0_26px_60px_rgba(106,123,255,0.45)]"
          >
            Discover Our Approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div> */}
    </div>

    {/* IMAGE RIGHT */}
    <div className="relative h-[300px] rounded-2xl overflow-hidden feature-image image-strip lg:order-2">
      <div className="image-tile">
        <img src="/images/text_images(RL)/what-makes-diffrent/1st.png" />
        <div className="image-overlay">
          <h4>Security by Design</h4>
          <p>Protection embedded into every layer from the ground up.</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="images\text_images(RL)\what-makes-diffrent\2nd.png" />
        <div className="image-overlay">
          <h4>Real-World Reliability</h4>
          <p>Systems tested for performance in live, practical environments.</p>
        </div>
      </div>

      <div className="image-tile">
        <img src="images\text_images(RL)\what-makes-diffrent\3rs.png" />
        <div className="image-overlay">
          <h4>Long-Term Partnership</h4>
          <p>Ongoing support and evolution beyond project delivery.</p>
        </div>
      </div>
    </div>

  </div>
  
</div>


{/* ================= FEATURE 3rd HIGHLIGHT SECTION ================= */}
{/* ===== TESTIMONIAL BACKGROUND TEXT ===== */}
<div className="testimonial-section mt-40">

  <h1 className="bg-title">
    Testimonials
  </h1>

  {/* PROJECT SHOWCASE SLIDESHOW */}
  <div className="container mx-auto px-6 relative z-10 mt-6">



  <div
    className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <AnimatePresence custom={direction} mode="wait">
      <motion.img
        key={slideIndex}
        src={PROJECTS[slideIndex].imageUrl}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>

    {/* Glass Overlay */}
<div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    {/* <div className="absolute bottom-10 left-10 max-w-lg text-white">
      <span className="text-sm uppercase tracking-widest text-[#6A7BFF]">
        {PROJECTS[slideIndex].category}
      </span>

      <h2 className="text-3xl font-bold mt-2">
        {PROJECTS[slideIndex].title}
      </h2>

      <p className="text-white/80 mt-3 text-sm">
        {PROJECTS[slideIndex].description}
      </p>
    </div> */}

    {/* Prev Button */}
    <button
      onClick={() => paginate(-1)}
      className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-[#6A7BFF]/40 transition"
    >
      <ArrowLeft size={20} />
    </button>

    {/* Next Button */}
    <button
      onClick={() => paginate(1)}
      className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-[#6A7BFF]/40 transition"
    >
      <ArrowRight size={20} />
    </button>

    {/* Pagination Dots */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
      {PROJECTS.map((_, i) => (
        <button
          key={i}
          onClick={() => setSlideIndex([i, i > slideIndex ? 1 : -1])}
          className={`h-3 w-3 rounded-full transition-all ${
            i === slideIndex
              ? "bg-[#6A7BFF] scale-125"
              : "bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>
  </div>
</div>
</div>

      

      {/* STYLES */}
      <style>{`
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(4, 140px);
          grid-template-areas:
            "div1 div1 div1 div2 div3"
            "div1 div1 div1 div2 div3"
            "div5 div5 div4 div4 div3"
            "div5 div5 div4 div4 div3";
          gap: 20px;
        }

        .card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          transform: translateY(40px) scale(0.96);
          opacity: 0;
          transition: all 0.8s cubic-bezier(.22,1,.36,1);
        }

        .card.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
        }

        .bg-img.show {
          opacity: 1;
        }

        .hover-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(106,123,255,0.65),
            rgba(255,102,196,0.65)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover .hover-gradient {
          opacity: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(to top, rgba(0,0,0,0.65), transparent);
          transform: translateY(24px);
          transition: all 0.4s ease;
        }

        .card:hover .content {
          transform: translateY(0);
        }

        .content h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: white;
        }

        .content p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          opacity: 0;
          margin-top: 6px;
          transition: opacity 0.4s ease;
        }

        .card:hover p {
          opacity: 1;
        }

        .cta {
          margin-top: 12px;
          font-size: 0.85rem;
          color: white;
          display: inline-flex;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover .cta {
          opacity: 1;
        }

        .div1 { grid-area: div1; }
        .div2 { grid-area: div2; }
        .div3 { grid-area: div3; }
        .div4 { grid-area: div4; }
        .div5 { grid-area: div5; }

        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-partners {
          animation: partners-marquee 35s linear infinite;
        }

        @media (max-width: 1024px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "div1"
              "div2"
              "div3"
              "div5"
              "div4";
          }
        }
 /* ================= SLIDESHOW ================= */

/* ===== FEATURE IMAGE STRIP ===== */

.image-strip {
  display: flex;
  gap: 14px;
  height: 100%;
}

/* Base tile */
.image-tile {
  position: relative;
  flex: 1;
  min-width: 0; /* 🔑 prevents overflow jitter */
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;

  transition:
    flex 0.75s cubic-bezier(.22,1,.36,1),
    transform 0.4s ease;
}

/* Base image */
.image-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* ===== GROUP BEHAVIOR ===== */

/* When hovering the strip, shrink ALL */
.image-strip {
  display: flex;
  gap: 14px;
  height: 300px; /* lock height */
}

.image-tile {
  position: relative;
  flex: 1;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: flex 0.6s cubic-bezier(.22,1,.36,1);
}

/* Slight horizontal expansion only */
.image-strip:hover .image-tile {
  flex: 0.9;
}

.image-strip .image-tile:hover {
  flex: 1.6;
}


/* ===== GRADIENT HOVER OVERLAY ===== */
.image-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(106,123,255,0.65),
    rgba(255,102,196,0.65)
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.image-tile:hover::after {
  opacity: 1;
}

/* Zoom image slightly */
.image-tile:hover img {
  transform: scale(1.08);
}

/* ===== TEXT OVERLAY ===== */
.image-overlay {
  position: absolute;
  bottom: 18px;
  left: 18px;
  right: 18px;
  z-index: 2;

  opacity: 0;
  transform: translateY(14px);
  transition: all 0.45s ease;
  color: white;
}

.image-overlay h4 {
  font-size: 1rem;
  font-weight: 600;
}

.image-overlay p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.85);
  margin-top: 4px;
}

.image-tile:hover .image-overlay {
  opacity: 1;
  transform: translateY(0);
}


/* ================= SCROLL REVEAL ================= */

.feature-text .reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: all 0.6s ease;
}

.feature-text.in-view .reveal {
  opacity: 1;
  transform: translateY(0);
}

.feature-text.in-view .reveal:nth-child(1) { transition-delay: 0.1s; }
.feature-text.in-view .reveal:nth-child(2) { transition-delay: 0.2s; }
.feature-text.in-view .reveal:nth-child(3) { transition-delay: 0.3s; }
.feature-text.in-view .reveal:nth-child(4) { transition-delay: 0.4s; }
.feature-text.in-view .reveal:nth-child(5) { transition-delay: 0.5s; }

.feature-image {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.8s cubic-bezier(.22,1,.36,1);
}

.feature-image.in-view {
  opacity: 1;
  transform: translateX(0);
}

/*testemonial css*/
/* ================= TESTIMONIAL SECTION ================= */

.testimonial-section {
  position: relative;
  overflow: hidden;

  padding-top: 120px;   /* 👈 space from above */
  padding-bottom: 20px;
}

/* BIG BACKGROUND TITLE */
.bg-title {
  position: absolute;
  top: 0;              /* aligns perfectly */
  left: 50%;
  transform: translateX(-50%);

  font-size: clamp(5rem, 14vw, 14rem);
  font-weight: 700;
  white-space: nowrap;

  color: rgba(255,255,255,0.07);

  line-height: 1;
  letter-spacing: -0.02em;

  z-index: 0;
  pointer-events: none;
  user-select: none;
}

/* slideshow container */
.testimonial-section .container {
  position: relative;
  z-index: 10;

  margin-top: 40px; /* 👈 seamless overlap */
}



    `}</style>
    </section>
  );
}
