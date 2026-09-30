import React from 'react';
import { SlidersHorizontal, Sparkles, Star, RotateCcw, X, Film } from 'lucide-react';
import { genresList } from '../data/movies.js';

const moods = [
  'All',
  'Mind-Bending',
  'Adrenaline',
  'Dark & Gritty',
  'Emotional',
  'Light & Fun',
  'Atmospheric',
];

export default function RecommendationTuner({
  preferences,
  onChangePreferences,
  onResetPreferences,
  totalMatches,
  isOpen,
  onClose,
}) {
  const { genre, minRating, selectedMood, sortBy } = preferences;

  const handleGenreChange = (newGenre) => {
    onChangePreferences({ ...preferences, genre: newGenre });
  };

  const handleRatingChange = (newRating) => {
    onChangePreferences({ ...preferences, minRating: parseFloat(newRating) });
  };

  const handleMoodChange = (newMood) => {
    onChangePreferences({ ...preferences, selectedMood: newMood });
  };

  const handleSortChange = (newSort) => {
    onChangePreferences({ ...preferences, sortBy: newSort });
  };

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              Smart Recommendation Engine
              <span className="hidden sm:inline-block rounded-md bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
                Live Algorithm
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Customize your taste profile to calculate precision compatibility scores.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onResetPreferences}
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Reset filters to default"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Close tuner"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Control Grid */}
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Target Genre */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Target Genre
          </label>
          <div className="relative">
            <select
              value={genre}
              onChange={(e) => handleGenreChange(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm font-medium text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              {genresList.map((g) => (
                <option key={g} value={g} className="bg-slate-900 text-slate-200">
                  {g === 'All' ? 'All Genres' : g}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            Prefers titles categorized under {genre === 'All' ? 'any genre' : genre}.
          </div>
        </div>

        {/* 2. Minimum Rating Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-300">
              Min. Rating Threshold
            </label>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="tabular-nums">{minRating.toFixed(1)}+</span>
            </span>
          </div>
          <input
            type="range"
            min="6.5"
            max="9.0"
            step="0.1"
            value={minRating}
            onChange={(e) => handleRatingChange(e.target.value)}
            className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
          />
          <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 tabular-nums">
            <span>6.5 (Broad)</span>
            <span>7.8 (Great)</span>
            <span>9.0 (Masterpiece)</span>
          </div>
        </div>

        {/* 3. Movie Mood & Vibe */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Atmospheric Mood
          </label>
          <select
            value={selectedMood}
            onChange={(e) => handleMoodChange(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm font-medium text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {moods.map((m) => (
              <option key={m} value={m} className="bg-slate-900 text-slate-200">
                {m === 'All' ? 'Any Cinematic Mood' : m}
              </option>
            ))}
          </select>
          <div className="mt-2 text-[11px] text-slate-500">
            Tunes recommendations by psychological atmosphere.
          </div>
        </div>

        {/* 4. Priority Ranking */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Sort Priority
          </label>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm font-medium text-slate-200 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="match" className="bg-slate-900 text-slate-200">
              Highest Compatibility (% Match)
            </option>
            <option value="rating" className="bg-slate-900 text-slate-200">
              Top IMDb Rating
            </option>
            <option value="year" className="bg-slate-900 text-slate-200">
              Newest Release Year
            </option>
            <option value="title" className="bg-slate-900 text-slate-200">
              Alphabetical (A - Z)
            </option>
          </select>
          <div className="mt-2 text-[11px] text-slate-500">
            {totalMatches} matching {totalMatches === 1 ? 'title' : 'titles'} ready.
          </div>
        </div>
      </div>
    </div>
  );
}
