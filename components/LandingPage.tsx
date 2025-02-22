"use client";
import type { CartItem } from "../store/cart";
import { useCartStore } from "../store/cart";
import ProductCard from "./ProductCard";

// Sample products data (you can move this to a separate file later)
const featuredProducts: Omit<CartItem, 'quantity'>[] = [
  {
    id: "1",
    name: "Premium Headphones",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", // Modern headphones
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", // Watch
  },
  {
    id: "3",
    name: "Wireless Speaker",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80", // Speaker
  },
];

export default function LandingPage() {
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">      
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto p-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12 relative inline-block">
            Featured Products
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">About Us</h4>
              <p className="text-gray-400">Quality products for our valued customers.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {/* Add your social media icons here */}
                <span className="text-2xl cursor-pointer hover:text-blue-400">📱</span>
                <span className="text-2xl cursor-pointer hover:text-blue-400">💬</span>
                <span className="text-2xl cursor-pointer hover:text-blue-400">📧</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 StoreName. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
