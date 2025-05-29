
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Product {
  id: string;
  name: string;
  price: number;
  casePrice?: number;
  bottlesPerCase?: number;
  image: string;
  size?: string;
  flavor?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedType, setSelectedType] = useState<'bottle' | 'case'>('bottle');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      id: `${product.id}-${selectedType}`,
      price: selectedType === 'bottle' ? product.price : product.casePrice || product.price,
      name: selectedType === 'bottle' ? product.name : `${product.name} (Case of ${product.bottlesPerCase})`,
      quantity: quantity
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(itemToAdd);
    }
    
    // Reset quantity after adding
    setQuantity(1);
  };

  const currentPrice = selectedType === 'bottle' ? product.price : product.casePrice || product.price;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-blue-200">
      <CardContent className="p-6">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          
          {product.size && (
            <p className="text-blue-600 font-medium mb-2">{product.size}</p>
          )}
          
          {product.flavor && (
            <p className="text-green-600 font-medium mb-2">{product.flavor}</p>
          )}
          
          {/* Type Selection Dropdown */}
          {product.casePrice && (
            <div className="mb-3">
              <Select value={selectedType} onValueChange={(value: 'bottle' | 'case') => setSelectedType(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  <SelectItem value="bottle">Single Bottle</SelectItem>
                  <SelectItem value="case">Case ({product.bottlesPerCase} bottles)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {/* Quantity Selection */}
          <div className="mb-3">
            <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    Quantity: {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-left">
              <span className="text-2xl font-bold text-gray-900">
                ₹{currentPrice}
              </span>
              {selectedType === 'case' && product.bottlesPerCase && (
                <p className="text-xs text-gray-500">
                  ₹{(currentPrice / product.bottlesPerCase).toFixed(1)} per bottle
                </p>
              )}
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
