"use client";

import { Search } from 'lucide-react';
import { useSearchStore } from "../store/search";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { setSearchQuery } = useSearchStore();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
    setSearchQuery(value);
    
    if (value && pathname !== '/products') {
      router.push('/products');
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
