import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Truck, Tags, CalendarHeart, MessageCircle } from 'lucide-react';
import { MorphingLight } from './ui/morphing-light';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { text: "✔ Hielo purificado y seguro", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-50" },
  { text: "✔ Entregas rápidas a domicilio", icon: Truck, color: "text-accent", bg: "bg-blue-100" },
  { text: "✔ Precios por mayoreo y menudeo", icon: Tags, color: "text-green-500", bg: "bg-green-50" },
  { text: "✔ Ideal para negocios, eventos y uso diario", icon: CalendarHeart, color: "text-purple-500", bg: "bg-purple-50" },
  { text: "✔ Atención directa por WhatsApp", icon: MessageCircle, color: "text-emerald-500", bg: "bg-emerald-50" }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filtrar elementos nulos por si acaso
      const validItems = itemsRef.current.filter(el => el != null);
      
      if (validItems.length > 0) {
        gsap.fromTo(validItems, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%"
            }
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Morphing Light Background */}
      <MorphingLight />
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-dark mb-4">¿Por qué elegir Hielera Torres?</h2>
          <p className="text-gray-500 font-serif italic text-lg">La opción de confianza para tu operación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            // Centro el último elemento si es impar en la fila final
            const isLastOdd = index === reasons.length - 1 && reasons.length % 3 !== 0;
            
            return (
              <div 
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={`group relative overflow-hidden bg-white border border-gray-100 p-8 rounded-3xl shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center ${isLastOdd ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                {/* Background hover effect */}
                <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>
                
                <h4 className="text-lg font-medium text-dark group-hover:text-accent transition-colors duration-300">
                  {item.text}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
