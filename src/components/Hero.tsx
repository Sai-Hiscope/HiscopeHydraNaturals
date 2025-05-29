
import React from 'react';
import ProductCard from './ProductCard';

const Hero = () => {
  const waterProducts = [
    {
      id: 'water-1l',
      name: 'Hydra Naturals Water',
      price: 20,
      casePrice: 120, // 12 bottles * 20
      bottlesPerCase: 12,
      image: '/lovable-uploads/da530ac5-2e8b-4146-b1e6-381f4a9f4967.png',
      size: '1 Liter'
    },
    {
      id: 'water-500ml',
      name: 'Hydra Naturals Water',
      price: 10,
      casePrice: 220, // 20 bottles * 10
      bottlesPerCase: 20,
      image: '/lovable-uploads/a75f7adc-4c3a-41b8-8e7d-cd3ec1f9dfea.png',
      size: '500ml'
    },
    {
      id: 'water-250ml',
      name: 'Hydra Naturals Water',
      price: 6,
      casePrice: 120, // 24 bottles * 6
      bottlesPerCase: 24,
      bigcasePrice: 230, // 24 bottles * 6
      bottlesPerbigCase: 48,
      image: '/lovable-uploads/66a68155-a443-48cd-a1c9-d9fe921929b5.png',
      size: '250ml'
    }
  ];

  const juiceProducts = [
    {
      id: 'juice-mango',
      name: 'Mango Juice',
      price: 20,
      casePrice: 100, // 6 bottles case
      bottlesPerCase: 6,
      image: '/lovable-uploads/dcf1e966-db9d-45df-bed4-261497c4ae18.png',
      flavor: 'Mango'
    },
    {
      id: 'juice-orange',
      name: 'Orange Juice',
      price: 20,
      casePrice: 100, // 6 bottles case
      bottlesPerCase: 6,
      image: '/lovable-uploads/ba2945e8-359f-442d-963b-3e9c009cf78f.png',
      flavor: 'Orange'
    },
    {
      id: 'juice-watermelon',
      name: 'Watermelon Juice',
      price: 20,
      casePrice: 100, // 6 bottles case
      bottlesPerCase: 6,
      image: '/lovable-uploads/7d72aead-82c3-4e62-b1a6-d778703a1838.png',
      flavor: 'Watermelon'
    },
    {
      id: 'juice-blueberry',
      name: 'Blueberry Juice',
      price: 20,
      casePrice: 100, // 6 bottles case
      bottlesPerCase: 6,
      image: '/lovable-uploads/f2ad1265-1c24-49e8-9a4e-ca44c65c3650.png',
      flavor: 'Blueberry'
    }
  ];

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pure <span className="text-blue-600">Hydration</span> & 
            <br />Natural <span className="text-green-600">Flavors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the purest water and freshest juices, crafted with care for your health and refreshment
          </p>
        </div>

        {/* Water Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Premium Water Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {waterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Juice Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Fresh Juice Varieties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {juiceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
