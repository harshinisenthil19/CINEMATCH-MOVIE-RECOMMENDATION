import React, { useEffect } from 'react';
import { X, ExternalLink, Star } from 'lucide-react';

export default function TrailerModal({ movie, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div>
              <h4 className="font-display font-bold text-white text-base sm:text-lg">
                {movie.title} <span className="text-slate-400 font-normal">({movie.releaseYear})</span>
              </h4>
              <p className="text-xs text-amber-400 font-medium">{movie.genres?.join(', ')}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close trailer modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`${movie.trailerUrl}?autoplay=1&rel=0`}
            title={`${movie.title} Trailer`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-slate-950/60 text-xs text-slate-400 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {movie.rating.toFixed(1)}/10
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Director: {movie.director}</span>
          </div>
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + movie.releaseYear + ' trailer')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
          >
            Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
