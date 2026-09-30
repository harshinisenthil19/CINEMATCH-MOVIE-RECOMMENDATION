import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Watchlist from './pages/Watchlist.jsx';
import TrailerModal from './components/TrailerModal.jsx';
import './App.css';

export default function App() {
  // Watchlist state initialized from localStorage
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem('cinematch_watchlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [trailerMovie, setTrailerMovie] = useState(null);
  const [showTuner, setShowTuner] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync watchlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cinematch_watchlist', JSON.stringify(watchlist));
    } catch {
      // storage unavailable
    }
  }, [watchlist]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  };

  const handleToggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        showToast(`Removed "${movie.title}" from your Watchlist`);
        return prev.filter((m) => m.id !== movie.id);
      } else {
        showToast(`Added "${movie.title}" to your Watchlist`);
        return [...prev, movie];
      }
    });
  };

  const handleClearWatchlist = () => {
    setWatchlist([]);
    showToast('Watchlist cleared');
  };

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#090d16] text-slate-100 selection:bg-amber-500/25 selection:text-amber-200">
        {/* Navigation Bar */}
        <Navbar
          watchlistCount={watchlist.length}
          onOpenTuner={() => setShowTuner(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  watchlist={watchlist}
                  onToggleWatchlist={handleToggleWatchlist}
                  onPlayTrailer={setTrailerMovie}
                  showTuner={showTuner}
                  setShowTuner={setShowTuner}
                />
              }
            />
            <Route
              path="/movie/:id"
              element={
                <MovieDetails
                  watchlist={watchlist}
                  onToggleWatchlist={handleToggleWatchlist}
                  onPlayTrailer={setTrailerMovie}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  onToggleWatchlist={handleToggleWatchlist}
                  onClearWatchlist={handleClearWatchlist}
                  onPlayTrailer={setTrailerMovie}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Video Trailer Modal */}
        {trailerMovie && (
          <TrailerModal
            movie={trailerMovie}
            onClose={() => setTrailerMovie(null)}
          />
        )}

        {/* Quiet Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-xs font-semibold text-slate-100 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
            <span className="h-2 w-2 rounded-full bg-amber-400 mr-2.5" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Clean Human Editorial Footer (Anti-slop rule: no fake background engines or buzzwords) */}
        <footer className="border-t border-slate-900 bg-slate-950 py-10 text-xs text-slate-500">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-slate-300">CineMatch</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Intelligent Movie Recommendation System</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#recommendations" className="hover:text-slate-300 transition-colors">
                Recommendations
              </a>
              <span aria-hidden="true" className="text-slate-800">·</span>
              <a href="#trending" className="hover:text-slate-300 transition-colors">
                Trending
              </a>
              <span aria-hidden="true" className="text-slate-800">·</span>
              <span>© {new Date().getFullYear()} CineMatch</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
