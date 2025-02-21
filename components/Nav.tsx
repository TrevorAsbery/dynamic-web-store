"use client";

import Link from "next/link";
import Cart from "./Cart";

const navItems = ['Home', 'Shop', 'About', 'Contact'];

export default function Nav() {
  return (
    <nav className="w-full p-6 bg-white shadow-lg backdrop-blur-md bg-opacity-90 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            StoreName
          </h1>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li 
              key={item} 
              className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium"
            >
              <Link href={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Cart />
      </div>
    </nav>
  );
} 