import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    quote: "Desde que nos abastecemos con Hielera Torres, se acabaron los problemas de falta de hielo en fin de semana. Llega cristalino, a tiempo y el servicio es impecable."
  },
  {
    quote: "La pureza del hielo es superior, tarda mucho más en derretirse que el de otras marcas. Nos ha ayudado muchísimo a reducir mermas en nuestros eventos al aire libre."
  },
  {
    quote: "Tienen la mejor logística de la zona. Hago mis pedidos directamente por WhatsApp y la entrega es exacta. Es un proveedor en el que definitivamente puedes confiar."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Crossfade animation
    cardsRef.current.forEach((card, index) => {
      if(!card) return;
      if (index === currentIndex) {
        gsap.to(card, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out", zIndex: 10 });
      } else {
        gsap.to(card, { autoAlpha: 0, x: 50, duration: 0.8, ease: "power2.in", zIndex: 0 });
      }
    });
  }, [currentIndex]);

  return (
    <section className="py-24 px-4 bg-dark text-white overflow-hidden relative">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-4">Confianza absoluta</h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Lo que dicen nuestros clientes</p>
        </div>

        <div className="relative h-[350px] md:h-[250px] w-full max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <p className="text-xl md:text-3xl font-serif italic text-gray-200 leading-relaxed md:leading-tight">"{testimonial.quote}"</p>
              
              <div className="mt-8 flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
