import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: {
        targets: nav,
        className: 'glass'
      },
      onEnter: () => {
        gsap.to(nav, {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          duration: 0.3
        });
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          duration: 0.3
        });
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex justify-center pointer-events-none">
      <nav ref={navRef} className="pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-3 transition-all duration-300 border border-transparent">
        <div className="flex items-center gap-3 font-serif font-bold text-xl text-dark tracking-tight">
          <img 
            src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776878430/ChatGPT_Image_22_abr_2026_10_19_53_xkqqkt.png" 
            alt="Hielera Torres Logo" 
            className="h-16 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden sm:inline-block mt-1">HIELERA TORRES</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-accent transition-colors">Inicio</a>
          <a href="#features" className="hover:text-accent transition-colors">Ventajas</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Precios</a>
          <a href="#location" className="hover:text-accent transition-colors">Ubicación</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#pricing" className="hidden md:inline-flex bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors hover:scale-105 transform active:scale-95">
            Pedir Ahora
          </a>
          <button className="md:hidden p-2 text-dark">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </div>
  );
}
