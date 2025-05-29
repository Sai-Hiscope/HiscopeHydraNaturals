
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ManufacturingProcess = () => {
  const processes = [
    {
      title: 'Manufacturing',
      description: 'State-of-the-art production facility with automated bottling lines ensuring consistent quality and hygiene standards.',
      image: '/lovable-uploads/d384d276-b8bb-4650-8dbb-48c167def9d7.png'
    },
    {
      title: 'Purification',
      description: 'Advanced multi-stage water purification system with reverse osmosis, UV sterilization, and mineral enhancement.',
      image: '/lovable-uploads/ca49cf74-21ee-45ce-ac30-7a3d20b4d604.png'
    },
    {
      title: 'Packaging',
      description: 'Automated packaging systems ensuring sealed freshness and contamination-free products ready for distribution.',
      image: '/lovable-uploads/42af653e-0f84-4d3a-b962-5683a14a7bfc.png'
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing and quality assurance at every stage to maintain the highest standards of purity and taste.',
      image: '/lovable-uploads/42af653e-0f84-4d3a-b962-5683a14a7bfc.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From source to bottle, we maintain the highest standards of quality and purity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
