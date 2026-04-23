import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 500, suffix: '+', label: 'Clientes activos' },
  { value: 10, suffix: ' tons', label: 'Producción diaria' },
  { value: 98, suffix: '%', label: 'Entregas a tiempo' },
  { value: 5, suffix: ' años', label: 'Operando localmente' }
];

export default function Metrics() {
  const containerRef = useRef(null);
  const valuesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      valuesRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = metrics[index].value;
        
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(el, 
              { innerHTML: 0 },
              { 
                innerHTML: targetValue,
                duration: 2,
                ease: "power3.out",
                snap: { innerHTML: 1 },
                onUpdate: function() {
                  el.innerHTML = Math.round(this.targets()[0].innerHTML);
                }
              }
            );
          }
        });
      });

      gsap.from(containerRef.current.children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 px-4 bg-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
      
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10"
      >
        {metrics.map((metric, i) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 pl-6 py-2">
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">
              <span ref={el => valuesRef.current[i] = el}>0</span>
              <span className="text-accent">{metric.suffix}</span>
            </div>
            <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
