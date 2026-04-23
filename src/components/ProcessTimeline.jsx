import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RippleCircles } from './ui/RippleCircles';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Pedido',
    description: 'Solicita vía WhatsApp o a través de nuestro formulario en línea de manera inmediata.'
  },
  {
    number: '02',
    title: 'Preparación',
    description: 'Producción y empaquetado del hielo bajo estrictos estándares de higiene y calidad.'
  },
  {
    number: '03',
    title: 'Entrega',
    description: 'Distribución rápida a domicilio o negocio en unidades con control de temperatura.'
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw line
      gsap.fromTo(lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      // Animate nodes
      nodesRef.current.forEach((node, i) => {
        if(!node) return;
        gsap.from(node, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 75%"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background Ripples */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0 scale-[2.5] md:scale-[3.5]">
        <RippleCircles />
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-dark mb-4">¿Cómo funciona?</h2>
          <p className="text-gray-500 font-serif italic text-lg">Un proceso simple y transparente.</p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>
          {/* Animated Line */}
          <div 
            ref={lineRef}
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-accent transform md:-translate-x-1/2 rounded-full origin-top"
          ></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div 
                key={i} 
                ref={el => nodesRef.current[i] = el}
                className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Node Center */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow duration-300 border border-gray-100/50">
                    <span className="text-accent font-mono text-sm font-bold tracking-widest block mb-2">Paso {step.number}</span>
                    <h3 className="text-xl md:text-2xl font-medium text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
