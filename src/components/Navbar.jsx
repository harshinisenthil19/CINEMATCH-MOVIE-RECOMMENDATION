import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Bookmark, Sparkles, SlidersHorizontal, Menu, X } from 'lucide-react';

export default function Navbar({ watchlistCount = 0, onOpenTuner }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Brand Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 shadow-md shadow-amber-500/20">
            <Film className="h-5 w-5 text-slate-950 transition-transform group-hover:scale-110" />
          </div>
          <span className="font-display tracking-tight text-white">
            Cine<span className="text-amber-400">Match</span>
          </span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link
            to="/"
            className={`transition-colors hover:text-white ${
              isActive('/') ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Explore Movies
          </Link>
          <a
            href="#recommendations"
            onClick={(e) => {
              if (location.pathname !== '/') {
                // If on details page, link will navigate via router
                return;
              }
              e.preventDefault();
              const el = document.getElementById('recommendations-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors hover:text-white"
          >
            Recommendations
          </a>
          <a
            href="#trending"
            onClick={(e) => {
              if (location.pathname !== '/') return;
              e.preventDefault();
              const el = document.getElementById('trending-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors hover:text-white"
          >
            Trending
          </a>
          <Link
            to="/watchlist"
            className={`flex items-center gap-1.5 transition-colors hover:text-white ${
              isActive('/watchlist') ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            <Bookmark className="h-4 w-4" />
            <span>Watchlist</span>
            {watchlistCount > 0 && (
              <span className="ml-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300">
                {watchlistCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          {onOpenTuner && (
            <button
              onClick={onOpenTuner}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition-all hover:bg-amber-400 hover:shadow-amber-500/25 active:scale-95 whitespace-nowrap"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Tune Recommendations</span>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Explore Movies
          </Link>
          <Link
            to="/#recommendations"
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('recommendations-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Recommendations
          </Link>
          <Link
            to="/watchlist"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            <span className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              Watchlist
            </span>
            {watchlistCount > 0 && (
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300">
                {watchlistCount}
              </span>
            )}
          </Link>
          {onOpenTuner && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTuner();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-xs font-semibold text-slate-950 mt-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Tune Recommendations
            </button>
          )}
        </div>
      )}
    </header>
  );
}
