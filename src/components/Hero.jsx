import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, TrendingDown, Snowflake } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badgesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current.children, {
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
    <section id="hero" ref={containerRef} className="relative w-full min-h-[90svh] lg:min-h-0 lg:aspect-video flex flex-col items-center justify-end pt-32 pb-4 md:pb-8 px-4 overflow-hidden">
      
      {/* Responsive Video Background */}
      <div className="absolute inset-0 z-0 bg-[#0b4c86]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-top lg:object-center"
        >
          <source src="https://res.cloudinary.com/dddjqjtbk/video/upload/v1777395122/0427_ri7om7.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay to blend the video into the blue background perfectly on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b4c86] via-black/40 to-black/20 lg:bg-black/30 lg:bg-none"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10 w-full px-4 mb-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl inline-block w-full">
          <h1 ref={titleRef} className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-center">
            <span className="text-white drop-shadow-lg">Hielo Premium.</span>
            <span className="font-serif italic text-[#38bdf8] font-bold mt-2 text-2xl md:text-3xl lg:text-4xl drop-shadow-md">Congeladores con tecnología Inverter súper ahorradora.</span>
          </h1>

          <p className="text-white font-medium max-w-xl mx-auto text-center mb-6 text-base md:text-lg leading-relaxed drop-shadow-md">
            <strong className="text-[#38bdf8] font-bold tracking-wide">Equipa tu negocio y reduce tu recibo de luz.</strong><br className="hidden md:block"/>
            1 freezer Inverter equivale al rendimiento de 3 tradicionales.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-6">
            {[
              { icon: Zap, text: "Ultra eficientes" },
              { icon: TrendingDown, text: "Bajo costo de luz" },
              { icon: Snowflake, text: "Hielo premium" }
            ].map((badge, i) => (
              <div 
                key={i} 
                ref={el => badgesRef.current[i] = el}
                className="flex items-center gap-3 bg-dark/40 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 shadow-sm"
              >
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="font-medium text-sm text-white">{badge.text}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/526421477625?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20hielo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-accent/40 border border-blue-400/30"
          >
            Hacer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}
