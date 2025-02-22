"use client";
import { Button } from "@/components/ui/button";
import type { CartItem } from "../store/cart";

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'>;
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
        <p className="text-gray-600 text-lg font-medium mb-4">
          ${product.price.toFixed(2)}
        </p>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}