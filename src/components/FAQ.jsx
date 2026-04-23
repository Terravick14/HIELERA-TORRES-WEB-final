import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "Para compras de menudeo no hay pedido mínimo si recoges en sucursal. Para entregas a domicilio, requerimos un mínimo de 5 bolsas. En mayoreo y negocios el mínimo varía según la zona."
  },
  {
    q: "¿Hacen entregas a domicilio?",
    a: "Sí, contamos con flotilla propia para garantizar entregas en tiempo y forma, conservando la cadena de frío."
  },
  {
    q: "¿Qué zonas cubren?",
    a: "Cubrimos toda la zona metropolitana y áreas industriales adyacentes. Para entregas foráneas, favor de contactar a un asesor."
  },
  {
    q: "¿Cómo hago un pedido?",
    a: "Puedes solicitarlo rápidamente vía WhatsApp o a través del formulario en esta página web para programar tus entregas."
  },
  {
    q: "¿Aceptan pagos digitales?",
    a: "Aceptamos transferencias SPEI, tarjetas de crédito/débito y pagos mediante links de pago para tu mayor comodidad."
  }
];

function AccordionItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-0 overflow-hidden">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-dark group-hover:text-accent transition-colors">
          {faq.q}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-400 ${isOpen ? 'rotate-180 text-accent' : ''}`} 
        />
      </button>
      <div 
        ref={contentRef} 
        className="h-0 opacity-0 overflow-hidden"
      >
        <p className="pb-6 text-gray-500 leading-relaxed pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto" ref={containerRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-dark mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-500 font-serif italic">Resolvemos tus dudas al instante.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
