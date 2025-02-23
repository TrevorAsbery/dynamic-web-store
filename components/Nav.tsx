"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { Headphones } from 'lucide-react';

const navItems = ['Products', 'About', 'Contact'];

export default function Nav() {
  return (
    <nav className="w-full p-6 bg-white shadow-lg backdrop-blur-md bg-opacity-90 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="w-1/5">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 transform group-hover:rotate-12 transition-transform">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  SONIC
                </span>
                <span className="text-gray-700">TECH</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Audio & Wearables</p>
            </div>
          </Link>
        </div>
        <div className="w-2/5">
          <SearchBar />
        </div>
        <ul className="hidden md:flex w-2/5 justify-end gap-8">
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
      </div>
    </nav>
  );
}