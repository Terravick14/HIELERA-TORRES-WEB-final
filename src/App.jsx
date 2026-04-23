import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
import Features from './components/Features';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Location from './components/Location';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative font-sans text-dark selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Metrics />
      <Features />
      <ProcessTimeline />
      <Testimonials />
      <Pricing />
      <FAQ />
      <OrderForm />
      <Location />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
