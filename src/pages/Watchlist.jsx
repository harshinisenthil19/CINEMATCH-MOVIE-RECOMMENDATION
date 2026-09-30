import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Film, ArrowLeft, Trash2 } from 'lucide-react';
import MovieCard from '../components/MovieCard.jsx';

export default function Watchlist({
  watchlist,
  onToggleWatchlist,
  onClearWatchlist,
  onPlayTrailer,
}) {
  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to explore"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Bookmark className="h-3.5 w-3.5 fill-amber-400" />
                <span>Personal Library</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Your Saved Watchlist
              </h1>
            </div>
          </div>

          {watchlist.length > 0 && (
            <button
              type="button"
              onClick={onClearWatchlist}
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-rose-500/30 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-500/20 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear Watchlist</span>
            </button>
          )}
        </div>

        {/* Movies Grid or Empty State */}
        {watchlist.length > 0 ? (
          <div>
            <p className="text-xs text-slate-400 mb-6">
              You have <strong className="text-amber-400 tabular-nums">{watchlist.length}</strong> {watchlist.length === 1 ? 'film' : 'films'} queued for viewing.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {watchlist.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isBookmarked={true}
                  onToggleWatchlist={onToggleWatchlist}
                  onPlayTrailer={onPlayTrailer}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 text-amber-400 mb-4">
              <Bookmark className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Your Watchlist is Empty</h3>
            <p className="mx-auto mt-2 max-w-sm text-xs sm:text-sm text-slate-400">
              Save any movies you wish to watch later by clicking the bookmark icon on any movie card or detail page.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-all"
            >
              <Film className="h-4 w-4" />
              <span>Browse Recommended Movies</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
