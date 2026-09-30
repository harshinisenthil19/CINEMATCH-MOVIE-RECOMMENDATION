import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({
  searchQuery,
  onSearchChange,
  placeholder = "Search movies by title, director, or actor...",
  totalResults,
}) {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none transition-colors peer-focus:text-amber-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="peer w-full rounded-xl border border-slate-800 bg-slate-900/90 py-3.5 pl-12 pr-12 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all focus:border-amber-500/80 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-4 text-slate-400 hover:text-white transition-colors"
            aria-label="Clear search query"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {searchQuery && typeof totalResults === 'number' && (
        <div className="mt-2 flex items-center justify-between px-1 text-xs text-slate-400">
          <span>
            Found <span className="font-semibold text-amber-400 tabular-nums">{totalResults}</span> {totalResults === 1 ? 'film' : 'films'} matching "{searchQuery}"
          </span>
          <button
            onClick={() => onSearchChange('')}
            className="text-amber-400/90 hover:text-amber-300 underline underline-offset-2"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
