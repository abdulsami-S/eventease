import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FilterDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" data-testid="filter-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
        data-testid="filter-dropdown-toggle"
      >
        <span className="font-medium">{selectedCategory}</span>
        <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 glass-card p-2 z-10" data-testid="filter-dropdown-menu">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                onSelectCategory(category);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-yellow-400/20 text-yellow-400'
                  : 'hover:bg-white/5'
              }`}
              data-testid={`filter-option-${category.toLowerCase().replace(' ', '-')}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
