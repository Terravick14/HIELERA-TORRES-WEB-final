import React, { useState } from 'react';

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');
    const tipo = formData.get('tipo');
    const cantidad = formData.get('cantidad');
    const direccion = formData.get('direccion');
    const comentarios = formData.get('comentarios');
    
    const text = `*NUEVO PEDIDO DE HIELO*\n\n*Nombre:* ${nombre}\n*Teléfono:* ${telefono}\n*Tipo de pedido:* ${tipo}\n*Cantidad:* ${cantidad}\n*Dirección:* ${direccion}\n*Comentarios:* ${comentarios || 'Ninguno'}`;
    const whatsappUrl = `https://wa.me/526421477625?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => setSubmitted(false), 3000);
      e.target.reset();
    }, 800);
  };

  return (
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif italic text-dark mb-4">Haz tu pedido</h2>
          <p className="text-gray-500">Rápido, seguro y sin complicaciones.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          {submitted && (
            <div className="absolute inset-0 z-20 bg-accent flex flex-col items-center justify-center text-white p-8 text-center transition-all duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-2">¡Pedido recibido!</h3>
              <p className="text-white/80">Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre completo" 
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder-gray-400 text-dark"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Teléfono" 
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder-gray-400 text-dark"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <select 
                  name="tipo"
                  required
                  defaultValue=""
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-gray-500 appearance-none"
                >
                  <option value="" disabled>Tipo de pedido</option>
                  <option value="menudeo">Menudeo (Personal)</option>
                  <option value="mayoreo">Mayoreo (Eventos)</option>
                  <option value="negocio">Negocio (Recurrente)</option>
                </select>
              </div>
              <div>
                <input 
                  type="text" 
                  name="cantidad"
                  placeholder="Cantidad (ej. 10 bolsas)" 
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder-gray-400 text-dark"
                />
              </div>
            </div>

            <div>
              <input 
                type="text" 
                name="direccion"
                placeholder="Dirección de entrega o sucursal" 
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder-gray-400 text-dark"
              />
            </div>

            <div>
              <textarea 
                name="comentarios"
                placeholder="Comentarios adicionales (Opcional)" 
                rows="3"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder-gray-400 text-dark resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-dark text-white py-4 rounded-xl font-medium hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                "Enviar Pedido"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
