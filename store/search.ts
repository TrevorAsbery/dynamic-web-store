import { create } from 'zustand';

interface SearchState {
  searchQuery: string;
  selectedCategory: string;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setSortBy: (sort: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc') => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: '',
  selectedCategory: 'all',
  priceRange: {
    min: 0,
    max: 1000,
  },
  sortBy: 'name-asc',
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSortBy: (sort) => set({ sortBy: sort }),
  resetFilters: () => set({
    searchQuery: '',
    selectedCategory: 'all',
    priceRange: { min: 0, max: 1000 },
    sortBy: 'name-asc',
  }),
}));
