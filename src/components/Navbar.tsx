import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDistributorFormOpen, setIsDistributorFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', location: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { cartCount } = useCart();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Be our distributor', href: '#', onClick: () => setIsDistributorFormOpen(true) },
    { name: 'Shop', href: '#shop' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/lovable-uploads/602d24e3-5d91-4141-9e5b-2f99dc6361e3.png"
                alt="Hydra Naturals"
                className="h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.onClick || (() => {})}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Cart and Mobile menu button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-700 hover:text-blue-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    item.onClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Distributor Form Modal */}
      {isDistributorFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Become a Distributor</h2>
              <button onClick={() => setIsDistributorFormOpen(false)} className="text-gray-600">
                <X />
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
                <p className="mb-2 text-gray-700">Scan the QR code below to contact us on WhatsApp:</p>
                <div className="flex justify-center my-4">
                  <img
                    src="/lovable-uploads/WhatappQR.jpg"
                    alt="WhatsApp QR Code"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-gray-800 font-medium">📞 +91 81427 40304</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  required
                  value={formData.location}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
