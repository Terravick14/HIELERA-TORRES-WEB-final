import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Menudeo",
    description: "Ideal para eventos personales o consumo en el hogar.",
    features: ["Compra individual", "Entrega local", "Precio estándar"],
    highlighted: false,
    cta: "Comprar ahora"
  },
  {
    name: "Mayoreo",
    description: "La mejor opción para organizadores y eventos grandes.",
    features: ["Descuentos por volumen", "Prioridad en entrega", "Soporte directo"],
    highlighted: true,
    cta: "Solicitar cotización"
  },
  {
    name: "Negocios",
    description: "Suministro constante para restaurantes y comercios.",
    features: ["Distribución continua", "Precios especiales", "Contratos mensuales"],
    highlighted: false,
    cta: "Contactar asesor"
  }
];

export default function Pricing() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-dark mb-4">Planes a tu medida</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Escala tu suministro de hielo según las necesidades exactas de tu operación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-dark text-white shadow-2xl scale-105 border-none z-10' 
                  : 'bg-white text-dark border border-gray-100 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Destacado
                </div>
              )}
              
              <h3 className="text-2xl font-serif italic mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 h-10 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-white/10' : 'bg-blue-50'}`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-accent' : 'text-accent'}`} />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/526421477625?text=${encodeURIComponent('Hola, me interesa el plan ' + plan.name + ' de hielo')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center ${
                plan.highlighted 
                  ? 'bg-accent text-white hover:bg-blue-600' 
                  : 'bg-gray-100 text-dark hover:bg-gray-200'
              }`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
