import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, TrendingDown, Snowflake } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const badgesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        scale: 0.95,
        ease: "power3.out",
        delay: 0.1
      })
      .from(titleRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.6")
      .from(badgesRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)"
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      
      {/* Full Visible Video Background without cropping */}
      <div className="absolute inset-0 z-0 bg-[#0b4c86]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-contain"
        >
          <source src="https://res.cloudinary.com/dddjqjtbk/video/upload/v1777233909/0426_ee2yiz.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10 mt-12 md:mt-0">
        {/* Logo Image */}
        <div ref={logoRef} className="flex justify-center mb-10">
          <img 
            src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776880751/ChatGPT_Image_22_abr_2026_10_57_52_ay63am.png" 
            alt="Hielo y Hielera Torres" 
            className="h-32 md:h-48 lg:h-56 object-contain rounded-2xl shadow-2xl shadow-black/50 border border-white/10 hover:scale-105 transition-transform duration-500 bg-white/5 backdrop-blur-sm p-2"
          />
        </div>

        <h1 ref={titleRef} className="flex flex-col items-center text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-center">
          <span className="text-white drop-shadow-md">Hielo de excelencia con</span>
          <span className="font-serif italic text-accent font-bold mt-3 text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">tecnología Inverter súper ahorradora.</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-16 text-lg leading-relaxed drop-shadow-md">
          Disfruta del hielo de mejor calidad mientras reduces radicalmente tus costos eléctricos. Nuestros equipos son tan eficientes que <strong className="text-white font-semibold">1 freezer Inverter equivale al rendimiento de 3 tradicionales</strong>.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {[
            { icon: Zap, text: "Ultra eficientes" },
            { icon: TrendingDown, text: "Bajo costo de luz" },
            { icon: Snowflake, text: "Hielo premium" }
          ].map((badge, i) => (
            <div 
              key={i} 
              ref={el => badgesRef.current[i] = el}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-white shadow-sm"
            >
              <badge.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm text-dark">{badge.text}</span>
            </div>
          ))}
        </div>

        <a 
          href="https://wa.me/526421477625?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20hielo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-accent/30"
        >
          Hacer Pedido
        </a>
      </div>
    </section>
  );
}
