/**
 * Comprehensive movie catalog for CineMatch Recommendation System
 * Spanning Action, Comedy, Romance, Horror, Thriller, Sci-Fi, Drama
 */

export const genresList = [
  'All',
  'Action',
  'Comedy',
  'Romance',
  'Horror',
  'Thriller',
  'Sci-Fi',
  'Drama',
];

export const movies = [
  {
    id: 'm1',
    title: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    description: 'When Earth becomes increasingly uninhabitable, a former NASA pilot leads a team of researchers through a newly discovered wormhole in search of a viable sanctuary world for humanity.',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    rating: 8.7,
    reviewsCount: 2100000,
    releaseYear: 2014,
    duration: '2h 49m',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    poster: '/src/assets/images/hero_cinematic_movie_1790690295321.jpg',
    backdrop: '/src/assets/images/hero_cinematic_movie_1790690295321.jpg',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    moods: ['Mind-Bending', 'Emotional', 'Cosmic Wonder'],
    contentRating: 'PG-13',
    awards: 'Won 1 Oscar. 44 wins & 148 nominations.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm2',
    title: 'The Dark Knight',
    tagline: 'Why so serious?',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genres: ['Action', 'Thriller', 'Drama'],
    rating: 9.0,
    reviewsCount: 2900000,
    releaseYear: 2008,
    duration: '2h 32m',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    moods: ['Dark & Gritty', 'Intense', 'Adrenaline'],
    contentRating: 'PG-13',
    awards: 'Won 2 Oscars. 163 wins & 164 nominations.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm3',
    title: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.',
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 8.8,
    reviewsCount: 2500000,
    releaseYear: 2010,
    duration: '2h 28m',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    moods: ['Mind-Bending', 'High Stakes', 'Clever'],
    contentRating: 'PG-13',
    awards: 'Won 4 Oscars. 159 wins & 220 nominations.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm4',
    title: 'Parasite',
    tagline: 'Act like you own the place.',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan in Seoul.',
    genres: ['Thriller', 'Drama', 'Comedy'],
    rating: 8.5,
    reviewsCount: 950000,
    releaseYear: 2019,
    duration: '2h 12m',
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong', 'Choi Woo-shik'],
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/5xH0RzeSojI',
    moods: ['Suspenseful', 'Dark Comedy', 'Social Commentary'],
    contentRating: 'R',
    awards: 'Won 4 Oscars including Best Picture. 308 wins & 271 nominations.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm5',
    title: 'La La Land',
    tagline: "Here's to the fools who dream.",
    description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    genres: ['Romance', 'Comedy', 'Drama'],
    rating: 8.0,
    reviewsCount: 650000,
    releaseYear: 2016,
    duration: '2h 8m',
    director: 'Damien Chazelle',
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend', 'J.K. Simmons'],
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/0pdqf4P9MB8',
    moods: ['Bittersweet', 'Romantic', 'Musical Delight'],
    contentRating: 'PG-13',
    awards: 'Won 6 Oscars. 242 wins & 298 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm6',
    title: 'A Quiet Place',
    tagline: 'If they hear you, they hunt you.',
    description: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing that hunt by sound.',
    genres: ['Horror', 'Thriller', 'Sci-Fi'],
    rating: 7.5,
    reviewsCount: 580000,
    releaseYear: 2018,
    duration: '1h 30m',
    director: 'John Krasinski',
    cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds', 'Noah Jupe'],
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/WR7cc5t7tv8',
    moods: ['Tense', 'Survival', 'Spine-Chilling'],
    contentRating: 'PG-13',
    awards: 'Nominated for 1 Oscar. 34 wins & 123 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm7',
    title: 'The Grand Budapest Hotel',
    tagline: 'A lively caper through the Republic of Zubrowka.',
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the glorious hotel under an exceptional concierge.',
    genres: ['Comedy', 'Drama', 'Adventure'],
    rating: 8.1,
    reviewsCount: 890000,
    releaseYear: 2014,
    duration: '1h 39m',
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric', 'Adrien Brody'],
    poster: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/1Fg5iWmQjwk',
    moods: ['Whimsical', 'Light & Fun', 'Visual Masterpiece'],
    contentRating: 'R',
    awards: 'Won 4 Oscars. 138 wins & 226 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm8',
    title: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between love and the universe, he prevents a terrible future.',
    genres: ['Sci-Fi', 'Action', 'Drama'],
    rating: 8.6,
    reviewsCount: 520000,
    releaseYear: 2024,
    duration: '2h 46m',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem'],
    poster: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    moods: ['Epic Scale', 'Visually Astounding', 'Destiny'],
    contentRating: 'PG-13',
    awards: 'Critics Choice & Golden Globe frontrunner.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm9',
    title: 'Hereditary',
    tagline: 'Every family tree hides a secret.',
    description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother, uncovering terrifying ancestry revelations.',
    genres: ['Horror', 'Drama', 'Thriller'],
    rating: 7.3,
    reviewsCount: 390000,
    releaseYear: 2018,
    duration: '2h 7m',
    director: 'Ari Aster',
    cast: ['Toni Collette', 'Alex Wolff', 'Milly Shapiro', 'Gabriel Byrne'],
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/V6wWKNij_1M',
    moods: ['Disturbing', 'Psychological Dread', 'Atmospheric'],
    contentRating: 'R',
    awards: 'Won 47 awards and 111 nominations.',
    isTrending: false,
    isPopular: false,
  },
  {
    id: 'm10',
    title: 'Before Sunrise',
    tagline: 'Can the greatest romance of your life happen in only one night?',
    description: 'A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
    genres: ['Romance', 'Drama'],
    rating: 8.1,
    reviewsCount: 340000,
    releaseYear: 1995,
    duration: '1h 41m',
    director: 'Richard Linklater',
    cast: ['Ethan Hawke', 'Julie Delpy', 'Andrea Eckert', 'Hanno Pöschl'],
    poster: '/src/assets/images/poster_drama_journey_1790690326617.jpg',
    backdrop: '/src/assets/images/poster_drama_journey_1790690326617.jpg',
    trailerUrl: 'https://www.youtube.com/embed/9v6X-Dytlko',
    moods: ['Intimate', 'Philosophical', 'Heartfelt'],
    contentRating: 'R',
    awards: 'Silver Berlin Bear for Best Director.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm11',
    title: 'Knives Out',
    tagline: 'Hell, any of them could have done it.',
    description: 'A detective investigates the death of a patriarch of an eccentric, combative family after his 85th birthday party turns into a crime scene.',
    genres: ['Comedy', 'Thriller', 'Drama'],
    rating: 7.9,
    reviewsCount: 650000,
    releaseYear: 2019,
    duration: '2h 10m',
    director: 'Rian Johnson',
    cast: ['Daniel Craig', 'Chris Evans', 'Ana de Armas', 'Jamie Lee Curtis'],
    poster: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/qGqiHJTsRkQ',
    moods: ['Whodunit', 'Witty', 'Entertaining'],
    contentRating: 'PG-13',
    awards: 'Nominated for 1 Oscar. 49 wins & 117 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm12',
    title: 'Mad Max: Fury Road',
    tagline: 'What a Lovely Day.',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and an ex-drifter named Max.',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 8.1,
    reviewsCount: 1100000,
    releaseYear: 2015,
    duration: '2h 0m',
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult', 'Hugh Keays-Byrne'],
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/hEJnMQG938g',
    moods: ['High Octane', 'Pure Adrenaline', 'Cinematic Masterpiece'],
    contentRating: 'R',
    awards: 'Won 6 Oscars. 248 wins & 237 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm13',
    title: 'The Shawshank Redemption',
    tagline: 'Fear can hold you prisoner. Hope can set you free.',
    description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion in Shawshank State Penitentiary.',
    genres: ['Drama'],
    rating: 9.3,
    reviewsCount: 2800000,
    releaseYear: 1994,
    duration: '2h 22m',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler'],
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/6hB3S9bIaco',
    moods: ['Inspirational', 'Triumph of Spirit', 'Deeply Moving'],
    contentRating: 'R',
    awards: 'Nominated for 7 Oscars. #1 Top Rated Movie on IMDb.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm14',
    title: 'Everything Everywhere All at Once',
    tagline: 'The universe is so much bigger than you realize.',
    description: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    genres: ['Sci-Fi', 'Comedy', 'Action', 'Drama'],
    rating: 7.8,
    reviewsCount: 510000,
    releaseYear: 2022,
    duration: '2h 19m',
    director: 'Daniel Kwan, Daniel Scheinert',
    cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan', 'Jamie Lee Curtis'],
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/wxN1T1uxQ2g',
    moods: ['Multiverse Chaos', 'Heartwarming', 'Inventive'],
    contentRating: 'R',
    awards: 'Won 7 Oscars including Best Picture. 411 wins total.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm15',
    title: 'Get Out',
    tagline: 'Just because you are invited, doesn’t mean you’re welcome.',
    description: 'A young African-American visits his white girlfriend’s parents for the weekend, where his simmering uneasiness about their reception eventually reaches a boiling point of terror.',
    genres: ['Horror', 'Thriller', 'Drama'],
    rating: 7.8,
    reviewsCount: 710000,
    releaseYear: 2017,
    duration: '1h 44m',
    director: 'Jordan Peele',
    cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford', 'Catherine Keener'],
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/DzfpyUB60YY',
    moods: ['Social Horror', 'Unnerving', 'Twisted'],
    contentRating: 'R',
    awards: 'Won 1 Oscar for Best Original Screenplay. 154 wins.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm16',
    title: 'Past Lives',
    tagline: 'Inyeon: a providence or fate connecting two souls.',
    description: 'Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week.',
    genres: ['Romance', 'Drama'],
    rating: 7.9,
    reviewsCount: 150000,
    releaseYear: 2023,
    duration: '1h 45m',
    director: 'Celine Song',
    cast: ['Greta Lee', 'Teo Yoo', 'John Magaro'],
    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/kA244xewjcI',
    moods: ['Lyrical', 'Poignant', 'Quiet Power'],
    contentRating: 'PG-13',
    awards: 'Nominated for 2 Oscars. 80 wins & 220 nominations.',
    isTrending: true,
    isPopular: false,
  },
  {
    id: 'm17',
    title: 'John Wick: Chapter 4',
    tagline: 'No way back. One way out.',
    description: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.',
    genres: ['Action', 'Thriller'],
    rating: 7.7,
    reviewsCount: 370000,
    releaseYear: 2023,
    duration: '2h 49m',
    director: 'Chad Stahelski',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne'],
    poster: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/qEVUtrk8_B4',
    moods: ['Martial Arts Ballet', 'Relentless', 'Spectacle'],
    contentRating: 'R',
    awards: 'Won 43 awards for stunt coordination and cinematography.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm18',
    title: 'Superbad',
    tagline: 'Two best friends on a quest for the perfect high school party.',
    description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
    genres: ['Comedy'],
    rating: 7.6,
    reviewsCount: 620000,
    releaseYear: 2007,
    duration: '1h 53m',
    director: 'Greg Mottola',
    cast: ['Jonah Hill', 'Michael Cera', 'Christopher Mintz-Plasse', 'Bill Hader'],
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/4eaZ_48ZYog',
    moods: ['Laugh Out Loud', 'Nostalgic', 'Buddy Comedy'],
    contentRating: 'R',
    awards: 'Cult comedy classic with 11 festival nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm19',
    title: 'Arrival',
    tagline: 'Why are they here?',
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world, leading to a profound revelation about time itself.',
    genres: ['Sci-Fi', 'Drama', 'Thriller'],
    rating: 7.9,
    reviewsCount: 760000,
    releaseYear: 2016,
    duration: '1h 56m',
    director: 'Denis Villeneuve',
    cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker', 'Michael Stuhlbarg'],
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/tFMo3UJ4B4g',
    moods: ['Philosophical', 'Deep Emotion', 'Mind Expansion'],
    contentRating: 'PG-13',
    awards: 'Won 1 Oscar. 71 wins & 275 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm20',
    title: 'The Conjuring',
    tagline: 'Based on the true case files of the Warrens.',
    description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their secluded farmhouse in Rhode Island.',
    genres: ['Horror', 'Thriller', 'Drama'],
    rating: 7.5,
    reviewsCount: 560000,
    releaseYear: 2013,
    duration: '1h 52m',
    director: 'James Wan',
    cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor', 'Ron Livingston'],
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/k10ETZ41q5o',
    moods: ['Supernatural Terror', 'Jump Scares', 'Chilling'],
    contentRating: 'R',
    awards: 'Saturn Award for Best Horror Film.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm21',
    title: 'Whiplash',
    tagline: 'The road to greatness can take you to the edge.',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student’s potential.',
    genres: ['Drama', 'Thriller'],
    rating: 8.5,
    reviewsCount: 970000,
    releaseYear: 2014,
    duration: '1h 47m',
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Paul Reiser', 'Melissa Benoist'],
    poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/7d_jQycdQGo',
    moods: ['Electrifying', 'Obsession', 'Mastery'],
    contentRating: 'R',
    awards: 'Won 3 Oscars. 99 wins & 148 nominations.',
    isTrending: false,
    isPopular: true,
  },
  {
    id: 'm22',
    title: 'Spider-Man: Across the Spider-Verse',
    tagline: 'It’s how you wear the mask that matters.',
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When they clash on how to handle a threat, Miles must redefine hero.',
    genres: ['Action', 'Sci-Fi', 'Comedy', 'Adventure'],
    rating: 8.6,
    reviewsCount: 420000,
    releaseYear: 2023,
    duration: '2h 20m',
    director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Brian Tyree Henry', 'Oscar Isaac'],
    poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/cqGjhVJWtEg',
    moods: ['Visual Kinetic Bliss', 'High Energy', 'Heart'],
    contentRating: 'PG',
    awards: 'Nominated for Best Animated Feature Oscar. 78 wins.',
    isTrending: true,
    isPopular: true,
  },
  {
    id: 'm23',
    title: 'Crazy Rich Asians',
    tagline: 'The only thing crazier than love is family.',
    description: 'This contemporary romantic comedy follows native New Yorker Rachel Chu to Singapore to meet her boyfriend’s family, only to discover he is one of the most eligible bachelors in Asia.',
    genres: ['Romance', 'Comedy'],
    rating: 6.9,
    reviewsCount: 180000,
    releaseYear: 2018,
    duration: '2h 0m',
    director: 'Jon M. Chu',
    cast: ['Constance Wu', 'Henry Golding', 'Michelle Yeoh', 'Gemma Chan', 'Awkwafina'],
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/ZQ-YX-5bAs0',
    moods: ['Glamorous', 'Feel Good', 'Charming'],
    contentRating: 'PG-13',
    awards: '2 Golden Globe nominations. 13 wins.',
    isTrending: false,
    isPopular: false,
  },
  {
    id: 'm24',
    title: 'Alien',
    tagline: 'In space no one can hear you scream.',
    description: 'The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission on a desolate planet.',
    genres: ['Horror', 'Sci-Fi', 'Thriller'],
    rating: 8.5,
    reviewsCount: 950000,
    releaseYear: 1979,
    duration: '1h 57m',
    director: 'Ridley Scott',
    cast: ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt', 'Veronica Cartwright'],
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1600&q=80',
    trailerUrl: 'https://www.youtube.com/embed/LjLamj-b0I8',
    moods: ['Claustrophobic', 'Sci-Fi Terror', 'Legendary'],
    contentRating: 'R',
    awards: 'Won 1 Oscar. National Film Registry selection.',
    isTrending: false,
    isPopular: true,
  }
];

/**
 * Intelligent recommendation algorithm
 * Computes a compatibility match score (0-100%) based on:
 * - Selected genre match (exact vs primary vs secondary)
 * - Minimum rating threshold
 * - Release era preference (if specified)
 * - Mood alignment
 */
export function getRecommendedMovies({
  genre = 'All',
  minRating = 7.0,
  selectedMood = 'All',
  searchQuery = '',
  sortBy = 'match', // 'match' | 'rating' | 'year' | 'title'
}) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return movies
    .map((movie) => {
      let score = 50; // base score

      // 1. Genre matching
      if (genre && genre !== 'All') {
        if (movie.genres.includes(genre)) {
          // Bonus if it's the primary (first) genre
          score += movie.genres[0] === genre ? 35 : 25;
        } else {
          score -= 30;
        }
      } else {
        score += 15;
      }

      // 2. Rating weight
      if (movie.rating >= minRating) {
        score += (movie.rating - minRating) * 12;
      } else {
        score -= (minRating - movie.rating) * 25;
      }

      // 3. Mood matching
      if (selectedMood && selectedMood !== 'All') {
        if (movie.moods.some((m) => m.toLowerCase().includes(selectedMood.toLowerCase()))) {
          score += 20;
        }
      }

      // 4. Popularity / awards slight boost
      if (movie.isPopular) score += 5;
      if (movie.isTrending) score += 5;

      // Clamp between 30% and 99%
      const matchScore = Math.max(25, Math.min(99, Math.round(score)));

      // Reason for recommendation
      let matchReason = '';
      if (genre !== 'All' && movie.genres.includes(genre)) {
        matchReason = `Matches your affinity for ${genre} with a stellar ${movie.rating}/10 rating.`;
      } else if (movie.rating >= 8.5) {
        matchReason = `Critically acclaimed masterpiece (${movie.rating}/10) loved by movie enthusiasts.`;
      } else {
        matchReason = `Highly rated ${movie.genres.join(', ')} film tailored to your taste.`;
      }

      return {
        ...movie,
        matchScore,
        matchReason,
      };
    })
    .filter((movie) => {
      // Must pass rating filter
      if (movie.rating < minRating) return false;

      // Must pass genre filter if specified
      if (genre !== 'All' && !movie.genres.includes(genre)) return false;

      // Must pass search query if given
      if (normalizedQuery) {
        const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
        const directorMatch = movie.director.toLowerCase().includes(normalizedQuery);
        const castMatch = movie.cast.some((c) => c.toLowerCase().includes(normalizedQuery));
        const genreMatch = movie.genres.some((g) => g.toLowerCase().includes(normalizedQuery));
        if (!titleMatch && !directorMatch && !castMatch && !genreMatch) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.releaseYear - a.releaseYear;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return b.matchScore - a.matchScore; // default match
    });
}
