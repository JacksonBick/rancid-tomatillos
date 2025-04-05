import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

  const [selectedMovie, UseSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    UseSelectedMovie(movie);  
  };

  const handleBackToList = () => {
    UseSelectedMovie(null);  
  };

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>

      {selectedMovie ? (
        <MovieDetails movieDetails={movieDetails} onBackClick={handleBackToList} />
      ) : (
        <div className="movie-container">
          {moviePosters.map((movie) => (
            <MoviePoster 
              key={movie.id} 
              movie={movie} 
              onClick={() => handleMovieClick(movie)}  
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
