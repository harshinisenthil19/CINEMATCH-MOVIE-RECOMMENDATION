import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, TrendingUp, Flame, Star, Film, RotateCcw, SlidersHorizontal, ArrowRight, Play } from 'lucide-react';
import SearchBar from '../components/SearchBar.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import MovieCard from '../components/MovieCard.jsx';
import RecommendationTuner from '../components/RecommendationTuner.jsx';
import { movies, getRecommendedMovies } from '../data/movies.js';

export default function Home({
  watchlist,
  onToggleWatchlist,
  onPlayTrailer,
  showTuner,
  setShowTuner,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Recommendation engine preferences
  const [preferences, setPreferences] = useState({
    genre: 'All',
    minRating: 7.5,
    selectedMood: 'All',
    sortBy: 'match',
  });

  // Keep genre filter in sync with tuner if user picks a genre in tuner
  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
    setPreferences((prev) => ({ ...prev, genre }));
  };

  // Brief loading feedback on filter switch for realistic feedback
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 180);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedGenre, preferences]);

  // Compute recommendations
  const recommendedMovies = useMemo(() => {
    return getRecommendedMovies({
      genre: preferences.genre,
      minRating: preferences.minRating,
      selectedMood: preferences.selectedMood,
      searchQuery,
      sortBy: preferences.sortBy,
    });
  }, [preferences, searchQuery]);

  // Trending movies
  const trendingMovies = useMemo(() => {
    return movies.filter((m) => m.isTrending);
  }, []);

  // Popular classic favorites
  const popularMovies = useMemo(() => {
    return movies.filter((m) => m.isPopular && !m.isTrending).slice(0, 8);
  }, []);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setPreferences({
      genre: 'All',
      minRating: 7.0,
      selectedMood: 'All',
      sortBy: 'match',
    });
  };

  // Featured Hero movie (e.g. Interstellar)
  const featuredMovie = movies[0];

  return (
    <div className="min-h-screen pb-20">
      {/* 1. Cinematic Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pt-6 pb-16 sm:py-20 lg:py-24">
        {/* Backdrop Image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_cinematic_movie_1790690295321.jpg"
            alt="Cinematic space odyssey backdrop"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Editorial Lead */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
              <Sparkles className="h-4 w-4" />
              <span>Personalized Movie Recommendation Engine</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Find Films That <span className="text-amber-400">Truly Resonate</span> With You.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Tell us your preferred genres, minimum rating standard, or current mood. Our algorithm analyzes critical metrics to curate cinema you’ll genuinely love.
            </p>

            {/* Quick Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowTuner(true);
                  const el = document.getElementById('recommendations-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-95"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Tune Recommendations</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('trending-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white"
              >
                <TrendingUp className="h-4 w-4 text-amber-400" />
                <span>Trending Films</span>
              </button>

              {featuredMovie && (
                <button
                  type="button"
                  onClick={() => onPlayTrailer && onPlayTrailer(featuredMovie)}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs sm:text-sm font-semibold text-amber-300 transition-all hover:bg-amber-500/20"
                >
                  <Play className="h-4 w-4 fill-amber-300 text-amber-300" />
                  <span>Spotlight Trailer</span>
                </button>
              )}
            </div>

            {/* Clean Unboxed Editorial Stats */}
            <div className="mt-8 flex items-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <div>
                <span className="font-display text-base font-bold text-slate-100 tabular-nums">24+</span> Curated Titles
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="font-display text-base font-bold text-amber-400 tabular-nums">7</span> Core Genres
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="font-display text-base font-bold text-slate-100 tabular-nums">100%</span> Real-time Compatibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Quick Genre Bar */}
      <section className="sticky top-16 z-30 border-b border-slate-800/80 bg-slate-950/95 py-4 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalResults={recommendedMovies.length}
            />

            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                type="button"
                onClick={() => setShowTuner(!showTuner)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                  showTuner
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>{showTuner ? 'Hide Filter Tuner' : 'Adjust Rating & Preferences'}</span>
              </button>
            </div>
          </div>

          {/* Genre Segmented Tabs */}
          <GenreFilter
            selectedGenre={selectedGenre}
            onSelectGenre={handleSelectGenre}
          />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 space-y-14">
        {/* Recommendation Engine Tuner Drawer / Box */}
        {showTuner && (
          <div id="tuner-box" className="animate-in fade-in slide-in-from-top-2 duration-300">
            <RecommendationTuner
              preferences={preferences}
              onChangePreferences={(newPref) => {
                setPreferences(newPref);
                setSelectedGenre(newPref.genre);
              }}
              onResetPreferences={handleResetFilters}
              totalMatches={recommendedMovies.length}
              isOpen={showTuner}
              onClose={() => setShowTuner(false)}
            />
          </div>
        )}

        {/* 3. Personalized Recommended Movies Section */}
        <section id="recommendations-section" className="scroll-mt-36">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800/80 pb-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Algorithm Match</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mt-0.5">
                Recommended For You
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {preferences.genre !== 'All' ? `Filtering ${preferences.genre} movies with ` : 'Across all genres with '}
                min rating <span className="text-amber-400 font-bold">{preferences.minRating.toFixed(1)}+</span>
                {preferences.selectedMood !== 'All' ? ` & mood "${preferences.selectedMood}"` : ''}.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>
                Showing <strong className="text-slate-200 tabular-nums">{recommendedMovies.length}</strong> matching titles
              </span>
            </div>
          </div>

          {/* Loading Skeleton */}
          {isLoading ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl border border-slate-800/60 bg-slate-900/50 p-3 space-y-3">
                  <div className="aspect-[3/4] w-full rounded-lg bg-slate-800" />
                  <div className="h-4 w-3/4 rounded bg-slate-800" />
                  <div className="h-3 w-1/2 rounded bg-slate-800" />
                </div>
              ))}
            </div>
          ) : recommendedMovies.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {recommendedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isBookmarked={watchlist.some((m) => m.id === movie.id)}
                  onToggleWatchlist={onToggleWatchlist}
                  showMatchScore={true}
                  onPlayTrailer={onPlayTrailer}
                />
              ))}
            </div>
          ) : (
            /* No Movies Found Empty State */
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center">
              <Film className="mx-auto h-12 w-12 text-slate-600 mb-3" />
              <h3 className="font-display text-lg font-bold text-slate-200">
                No Movies Found Matching Your Criteria
              </h3>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-slate-400">
                We couldn't find any films matching the combination of "{preferences.genre}", rating threshold {preferences.minRating}+, and search query.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Filters & Show All Movies</span>
              </button>
            </div>
          )}
        </section>

        {/* 4. Trending Movies Section */}
        <section id="trending-section" className="scroll-mt-36">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <Flame className="h-3.5 w-3.5 text-rose-500" />
                <span>Global Buzz</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mt-0.5">
                Trending Right Now
              </h2>
            </div>
            <span className="text-xs text-slate-400">High engagement & recent hits</span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {trendingMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isBookmarked={watchlist.some((m) => m.id === movie.id)}
                onToggleWatchlist={onToggleWatchlist}
                onPlayTrailer={onPlayTrailer}
              />
            ))}
          </div>
        </section>

        {/* 5. Popular & All-Time Classics Section */}
        <section className="scroll-mt-36">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>Masterpieces</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mt-0.5">
                Popular & Critically Acclaimed
              </h2>
            </div>
            <span className="text-xs text-slate-400">Top IMDb & Academy winners</span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isBookmarked={watchlist.some((m) => m.id === movie.id)}
                onToggleWatchlist={onToggleWatchlist}
                onPlayTrailer={onPlayTrailer}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
