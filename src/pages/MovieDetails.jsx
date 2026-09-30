import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Bookmark,
  Play,
  ArrowLeft,
  Calendar,
  Clock,
  Award,
  User,
  Sparkles,
  Share2,
  Check,
  Film
} from 'lucide-react';
import { movies } from '../data/movies.js';
import MovieCard from '../components/MovieCard.jsx';

export default function MovieDetails({
  watchlist,
  onToggleWatchlist,
  onPlayTrailer,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [backdropError, setBackdropError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Scroll to top on load or ID switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setImageError(false);
    setBackdropError(false);
  }, [id]);

  const movie = useMemo(() => {
    return movies.find((m) => m.id === id) || movies[0];
  }, [id]);

  const isBookmarked = watchlist.some((m) => m.id === movie.id);

  // Similar movies based on common genres or director
  const similarMovies = useMemo(() => {
    return movies
      .filter((m) => m.id !== movie.id)
      .map((m) => {
        let similarity = 0;
        m.genres.forEach((g) => {
          if (movie.genres.includes(g)) similarity += 30;
        });
        if (m.director === movie.director) similarity += 40;
        if (Math.abs(m.rating - movie.rating) <= 0.5) similarity += 15;
        return {
          ...m,
          matchScore: Math.min(98, Math.max(40, similarity)),
        };
      })
      .filter((m) => m.matchScore >= 45)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
  }, [movie]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!movie) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-white">Movie Not Found</h2>
        <Link to="/" className="mt-4 inline-block text-amber-400 hover:underline">
          Return to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      {/* 1. Backdrop Hero Banner */}
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-slate-950">
        {!backdropError ? (
          <img
            src={movie.backdrop || movie.poster}
            alt={`${movie.title} backdrop`}
            onError={() => setBackdropError(true)}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center filter brightness-50"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/30" />
        )}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        {/* Back Button Navigation */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950/70 border border-slate-700/60 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md hover:bg-slate-900 hover:text-white transition-all shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Movies</span>
          </button>
        </div>
      </div>

      {/* 2. Main Movie Container */}
      <div className="relative -mt-44 sm:-mt-64 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Column: Movie Poster & Action Buttons */}
          <div className="w-full md:w-72 lg:w-80 shrink-0 mx-auto md:mx-0 max-w-xs md:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="relative aspect-[3/4] w-full bg-slate-900">
                {!imageError ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-slate-900">
                    <Film className="h-12 w-12 text-amber-500/40 mb-3" />
                    <span className="font-display font-bold text-white text-base">{movie.title}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-4 space-y-2.5">
              {movie.trailerUrl && (
                <button
                  type="button"
                  onClick={() => onPlayTrailer && onPlayTrailer(movie)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Play className="h-4 w-4 fill-slate-950" />
                  <span>Watch Trailer</span>
                </button>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onToggleWatchlist(movie)}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold backdrop-blur-md transition-all ${
                    isBookmarked
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-slate-900/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                  <span>{isBookmarked ? 'In Watchlist' : 'Add to Watchlist'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share movie link"
                  className="flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy link"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Information */}
          <div className="flex-1 space-y-6 pt-2">
            <div>
              {/* Unboxed Metadata row (Anti-slop rule) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-500" />
                  {movie.releaseYear}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  {movie.duration}
                </span>
                {movie.contentRating && (
                  <>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-300 uppercase">
                      {movie.contentRating}
                    </span>
                  </>
                )}
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-amber-400">{movie.genres?.join(', ')}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="mt-2 text-sm sm:text-base italic text-amber-200/80 font-normal">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            {/* Ratings & Score Highlight */}
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Star className="h-5 w-5 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white tabular-nums">
                      {movie.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-500">/ 10</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {movie.reviewsCount ? `${(movie.reviewsCount / 1000000).toFixed(1)}M user votes` : 'Audience rating'}
                  </p>
                </div>
              </div>

              {movie.awards && (
                <>
                  <div className="hidden sm:block h-8 w-px bg-slate-800" />
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-300">Accolades</span>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{movie.awards}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Synopsis / Description */}
            <div>
              <h3 className="font-display text-base font-bold text-white tracking-tight mb-2">
                Synopsis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {movie.description}
              </p>
            </div>

            {/* Director & Cast Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-5">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Directed by
                </span>
                <span className="text-sm font-bold text-slate-200">
                  {movie.director}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Starring Cast
                </span>
                <div className="text-sm text-slate-300 font-medium">
                  {movie.cast?.join(', ')}
                </div>
              </div>
            </div>

            {/* Mood Tags */}
            {movie.moods && movie.moods.length > 0 && (
              <div className="border-t border-slate-800/80 pt-4">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  Atmosphere & Themes
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  {movie.moods.map((mood, idx) => (
                    <React.Fragment key={mood}>
                      <span className="text-slate-300">{mood}</span>
                      {idx < movie.moods.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Recommended Similar Movies Section */}
        {similarMovies.length > 0 && (
          <section className="mt-16 border-t border-slate-800 pt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Recommendation System</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-white tracking-tight mt-0.5">
                  More Movies Like This
                </h2>
              </div>
              <span className="text-xs text-slate-400">Shared genre & tone affinity</span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {similarMovies.map((similar) => (
                <MovieCard
                  key={similar.id}
                  movie={similar}
                  isBookmarked={watchlist.some((m) => m.id === similar.id)}
                  onToggleWatchlist={onToggleWatchlist}
                  showMatchScore={true}
                  onPlayTrailer={onPlayTrailer}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
