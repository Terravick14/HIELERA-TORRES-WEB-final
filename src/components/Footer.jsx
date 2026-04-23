import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 font-serif font-bold text-2xl text-white tracking-tight mb-6">
              <img 
                src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776878430/ChatGPT_Image_22_abr_2026_10_19_53_xkqqkt.png" 
                alt="Hielera Torres Logo" 
                className="h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="mt-1">HIELERA TORRES</span>
            </div>
            <p className="text-gray-400 max-w-sm font-sans leading-relaxed mb-6">
              Suministro confiable de hielo para negocios y consumo diario. La pureza y puntualidad que tu operación exige.
            </p>
            <a href="mailto:hieleratorres@gmail.com" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hieleratorres@gmail.com
            </a>
          </div>
          
          <div>
            <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-300 hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-accent transition-colors">Ventajas</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-accent transition-colors">Precios</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-accent transition-colors">Ubicación</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Aviso legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hielera Torres. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Sistema activo · v1.0
          </div>
        </div>
      </div>
    </footer>
  );
}
