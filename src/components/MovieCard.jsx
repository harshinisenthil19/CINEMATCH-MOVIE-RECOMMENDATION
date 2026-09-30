import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Bookmark, Play, Film, Sparkles } from 'lucide-react';

export default function MovieCard({
  movie,
  isBookmarked = false,
  onToggleWatchlist,
  showMatchScore = false,
  onPlayTrailer,
}) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleWatchlist) {
      onToggleWatchlist(movie);
    }
  };

  const handleTrailerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onPlayTrailer) {
      onPlayTrailer(movie);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-2xl hover:shadow-amber-500/5"
    >
      {/* Poster Media Box with 3:4 Aspect Ratio */}
      <Link to={`/movie/${movie.id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900 block">
        {!imageError ? (
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Styled Fallback Container (Zero-Broken-Image Policy) */
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950/40 p-4 text-center">
            <Film className="h-10 w-10 text-amber-500/40 mb-2" />
            <span className="font-display font-semibold text-slate-200 text-sm line-clamp-2">
              {movie.title}
            </span>
            <span className="text-xs text-slate-500 mt-1">{movie.genres?.[0]}</span>
          </div>
        )}

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges (Rating & Watchlist Toggle) */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
          {/* Rating */}
          <div className="flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md border border-amber-500/20 shadow-sm pointer-events-auto">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="tabular-nums font-bold">{movie.rating.toFixed(1)}</span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleBookmarkClick}
            aria-label={isBookmarked ? 'Remove from Watchlist' : 'Add to Watchlist'}
            className={`pointer-events-auto flex h-8 w-8 items-center justify-center rounded-md backdrop-blur-md transition-all ${
              isBookmarked
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                : 'bg-slate-950/70 text-slate-300 hover:bg-slate-900 hover:text-white border border-slate-700/60'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-slate-950' : ''}`} />
          </button>
        </div>

        {/* Match Score Badge (if recommendation mode) */}
        {showMatchScore && typeof movie.matchScore === 'number' && (
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-md bg-emerald-950/85 px-2.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-md">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span className="tabular-nums">{movie.matchScore}% Match</span>
          </div>
        )}

        {/* Quick Play Trailer Hover Overlay Button */}
        {movie.trailerUrl && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={handleTrailerClick}
              className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-xl shadow-amber-500/40 transition-transform hover:scale-105"
            >
              <Play className="h-3.5 w-3.5 fill-slate-950 text-slate-950" />
              Trailer
            </button>
          </div>
        )}
      </Link>

      {/* Card Content & Metadata */}
      <div className="flex flex-1 flex-col p-4">
        {/* Unboxed Metadata (Anti-slop zero-pill rule: clean text with dot separator) */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
          <span>{movie.releaseYear}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{movie.duration}</span>
          {movie.contentRating && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-500 uppercase">{movie.contentRating}</span>
            </>
          )}
        </div>

        {/* Title */}
        <Link
          to={`/movie/${movie.id}`}
          className="font-display text-base font-bold text-slate-100 line-clamp-1 transition-colors hover:text-amber-400"
          title={movie.title}
        >
          {movie.title}
        </Link>

        {/* Genres inline text */}
        <div className="mt-1 text-xs text-amber-400/90 font-medium line-clamp-1">
          {movie.genres?.join(', ')}
        </div>

        {/* Description snippet */}
        <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {movie.description}
        </p>

        {/* Recommendation reason if present */}
        {showMatchScore && movie.matchReason && (
          <div className="mt-3 border-t border-slate-800/80 pt-2 text-[11px] text-emerald-400/90 leading-tight italic">
            "{movie.matchReason}"
          </div>
        )}

        {/* Footer info: Director & Details link */}
        <div className="mt-3.5 flex items-center justify-between border-t border-slate-800/60 pt-2.5 text-xs">
          <span className="text-slate-500 truncate max-w-[130px]">
            Dir: <span className="text-slate-300 font-medium">{movie.director}</span>
          </span>
          <Link
            to={`/movie/${movie.id}`}
            className="font-semibold text-amber-400 hover:text-amber-300 text-xs transition-colors"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
