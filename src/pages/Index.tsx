
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ManufacturingProcess />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
