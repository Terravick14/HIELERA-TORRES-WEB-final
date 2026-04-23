import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Truck, Package, Snowflake } from 'lucide-react';
import GenerativeMountainScene from './ui/mountain-scene';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const mockupRef = useRef(null);
  const badgesRef = useRef([]);

  useEffect(() => {
    // Removed canvas

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      })
      .from(mockupRef.current, {
        scale: 0.8,
        rotateX: 10,
        rotateY: -10,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.6")
      .from(badgesRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)"
      }, "-=0.8");

      // 3D Mouse movement
      const handleMouseMove = (e) => {
        if (!mockupRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(mockupRef.current, {
          rotateY: x,
          rotateX: -y,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Mountain Scene Background */}
      <GenerativeMountainScene />

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 ref={titleRef} className="flex flex-col items-center text-4xl md:text-6xl lg:text-6xl font-medium tracking-tight mb-12 text-center">
          <span className="text-dark">Hielo de calidad para</span>
          <span className="font-serif italic text-accent font-bold mt-3 text-3xl md:text-5xl lg:text-6xl">tu negocio, tus eventos y tu día a día.</span>
        </h1>

        {/* Mockup Central */}
        <div className="relative mx-auto max-w-xl perspective-[1000px] mb-12">
          <div 
            ref={mockupRef} 
            className="w-full rounded-2xl overflow-hidden glass border border-white/40 shadow-2xl relative bg-white/20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img 
              src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776880751/ChatGPT_Image_22_abr_2026_10_57_52_ay63am.png" 
              alt="Hielo premium industrial" 
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {[
            { icon: Truck, text: "Entrega rápida" },
            { icon: Package, text: "Venta mayoreo" },
            { icon: Snowflake, text: "Calidad garantizada" }
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
          className="inline-flex bg-dark text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-accent/30"
        >
          Hacer Pedido
        </a>
      </div>
    </section>
  );
}
