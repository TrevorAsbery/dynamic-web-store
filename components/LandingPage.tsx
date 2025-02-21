"use client";
import { Button } from "@/components/ui/button";
import type { CartItem } from "../store/cart";
import { useCartStore } from "../store/cart";

// Sample products data (you can move this to a separate file later)
const featuredProducts: Omit<CartItem, 'quantity'>[] = [
  {
    id: "1",
    name: "Product 1",
    price: 99.99,
    imageUrl: "/product1.jpg", // Add actual image URLs
  },
  {
    id: "2",
    name: "Product 2",
    price: 149.99,
    imageUrl: "/product2.jpg",
  },
  {
    id: "3",
    name: "Product 3",
    price: 199.99,
    imageUrl: "/product3.jpg",
  },
];

export default function LandingPage() {
  const { addToCart } = useCartStore();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto p-8">
        <h3 className="text-3xl font-bold text-center mb-12 relative">
          Featured Products
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {featuredProducts.map((product) => (
            <div key={product.id} 
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
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
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
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
