import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-accent mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-dark mb-4">Encuéntranos</h2>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-md">
              Nuestra planta procesadora y punto de venta al público se encuentra estratégicamente ubicada para rápida distribución en la ciudad.
            </p>
            
            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-1">Dirección</h4>
                <p className="text-dark font-medium">Francisco I. Madero #25, Centro Comercial<br/>85900 Huatabampo, Son.</p>
              </div>
              <div>
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-1">Contacto</h4>
                <a href="mailto:hieleratorres@gmail.com" className="text-dark font-medium hover:text-accent transition-colors">hieleratorres@gmail.com</a>
              </div>
              <div>
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-1">Horario</h4>
                <p className="text-dark font-medium">Lunes a Sábado: 9:30 AM - 6:00 PM<br/>Domingo: 9:30 AM - 4:00 PM</p>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/SsP1kio3tTHBf9Wh6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-dark text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors duration-300"
            >
              Abrir en Google Maps
            </a>
          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
            {/* Overlay estético para que el mapa no rompa el diseño */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            
            <iframe 
              src="https://maps.google.com/maps?q=Francisco+I.+Madero+%2325,+Centro+Comercial,+85900+Huatabampo,+Son.&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Hielera Torres"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
