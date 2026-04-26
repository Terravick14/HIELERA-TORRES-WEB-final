import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Menudeo",
    subtitle: "Hielo de cubos",
    description: "Ideal para eventos personales o consumo en el hogar.",
    prices: [
      { size: "1.5 kg", price: "$22" },
      { size: "3 kg", price: "$37" },
      { size: "5 kg", price: "$48" },
      { size: "15 kg", price: "$70" }
    ],
    highlighted: false,
    cta: "Comprar ahora"
  },
  {
    name: "Mayoreo",
    subtitle: "Hielo de cubos",
    description: "La mejor opción para organizadores y eventos grandes.",
    prices: [
      { size: "1.5 kg", price: "$15" },
      { size: "3 kg", price: "$26" },
      { size: "5 kg", price: "$36" },
      { size: "15 kg", price: "$65" }
    ],
    highlighted: true,
    cta: "Solicitar mayoreo"
  },
  {
    name: "Negocios",
    subtitle: "Restaurantes y bares",
    description: "Suministro constante para restaurantes y comercios.",
    features: ["Distribución continua", "Precios especiales", "Contratos mensuales", "Atención prioritaria"],
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full ${plan.highlighted
                  ? 'bg-dark text-white shadow-2xl scale-105 border-none z-10 py-10'
                  : 'bg-white text-dark border border-gray-100 shadow-lg mt-0 md:mt-4 mb-0 md:mb-4'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent/30">
                  Destacado
                </div>
              )}

              <h3 className="text-2xl font-serif italic mb-1">{plan.name}</h3>
              {plan.subtitle && (
                <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${plan.highlighted ? 'text-accent' : 'text-accent'}`}>
                  {plan.subtitle}
                </p>
              )}
              
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              {plan.prices && plan.prices.length > 0 && (
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.prices.map((item, index) => (
                    <div key={index} className={`flex items-end justify-between border-b border-dashed pb-2 ${plan.highlighted ? 'border-white/20' : 'border-gray-200'}`}>
                      <span className={`font-medium ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{item.size}</span>
                      <span className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-dark'}`}>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {plan.features && plan.features.length > 0 && (
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-white/10' : 'bg-blue-50'}`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-accent' : 'text-accent'}`} />
                      </div>
                      <span className={`text-sm font-medium ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <a
                  href={`https://wa.me/526421477625?text=${encodeURIComponent('Hola, me interesa el plan ' + plan.name + ' de hielo')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center ${plan.highlighted
                      ? 'bg-accent text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-accent/30'
                      : 'bg-gray-100 text-dark hover:bg-gray-200'
                    }`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent/20 via-blue-400/20 to-accent/20">
            <a 
              href="https://wa.me/526421477625?text=Hola,%20quisiera%20una%20cotización%20de%20mayoreo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white px-8 py-4 rounded-full text-lg font-medium text-dark hover:bg-blue-50 transition-colors shadow-sm"
            >
              ¿Requieres un gran volumen? <span className="text-accent font-bold ml-1">Pregunta por tu cotización de mayoreo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
