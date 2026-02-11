import { useEffect, useRef } from "react";

export function StatsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative py-25 bg-[#14053F] overflow-hidden">

            {/* Direct Center Control */}
      <div className="flex justify-center">

        <div
          className="
            w-[10000px] 
            h-[500px]
            md:w-[12000px]
            md:h-[800px]
            rounded-3xl 
             
             
             
            shadow-[0_0_80px_rgba(0,0,0,0.4)]
            transition-all duration-500
          "
        >
          <div className="w-full h-full overflow-hidden rounded-2xl bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/urbanium-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
