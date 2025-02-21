"use client";
import { useState } from "react";
import { useCartStore } from "../store/cart";

const Cart = () => {
  const { items, addToCart, removeFromCart, clearCart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative">
      {/* Cart Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded">
        🛒 ({items.length})
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">❌</button>

          {items.length === 0 ? (
            <p className="text-center mt-4">Your cart is empty.</p>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b p-2">
                  <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1 px-2">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 rounded">+</button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Total & Clear Cart */}
              <div className="mt-4">
                <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                <button onClick={clearCart} className="bg-gray-600 text-white w-full p-2 rounded mt-2">Clear Cart</button>
                <button className="bg-blue-600 text-white w-full p-2 rounded mt-2">Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;