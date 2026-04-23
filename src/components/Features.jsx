import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, TrendingUp, Users, PackageCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bars animation
      barsRef.current.forEach(bar => {
        if (!bar) return;
        const width = bar.getAttribute('data-width');
        gsap.fromTo(bar, 
          { width: '0%' },
          {
            width: width,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%"
            }
          }
        );
      });

      // General fade in
      gsap.from(".feature-section", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 feature-section">
          <h2 className="text-3xl md:text-5xl font-serif italic text-dark mb-4">Eficiencia comprobada</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">La logística detrás de cada entrega está optimizada para garantizar la máxima calidad y puntualidad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 feature-section">
          {/* Mini Dashboard F7 */}
          <div className="glass-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent blur-[60px] opacity-20"></div>
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <TrendingUp className="text-accent" /> Panel Operativo
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Pedidos Hoy</p>
                <p className="text-2xl font-mono text-primary font-bold">124</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Entregas</p>
                <p className="text-2xl font-mono text-accent font-bold">118</p>
              </div>
            </div>

            {/* Progress Bars F4 */}
            <div className="space-y-6">
              {[
                { label: 'Eficiencia logística', width: '95%' },
                { label: 'Satisfacción cliente', width: '98%' },
                { label: 'Capacidad producción', width: '90%' }
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{bar.label}</span>
                    <span className="font-mono text-accent">{bar.width}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      ref={el => barsRef.current[i] = el}
                      data-width={bar.width}
                      className="h-full bg-accent rounded-full w-0"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparator F9 */}
          <div className="feature-section">
            <h3 className="text-2xl md:text-3xl font-medium mb-8">La diferencia es clara</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wider">Sin nosotros</h4>
                <ul className="space-y-4">
                  {['Entregas tardías', 'Baja calidad', 'Precios inconsistentes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <X className="w-4 h-4 text-red-400 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="text-accent font-medium mb-4 text-sm uppercase tracking-wider">Hielera Torres</h4>
                <ul className="space-y-4">
                  {['Entregas puntuales', 'Hielo puro y seguro', 'Precios competitivos'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-dark text-sm font-medium">
                      <Check className="w-4 h-4 text-accent shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
