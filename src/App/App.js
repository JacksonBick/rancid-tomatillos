import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>

      <div className="movie-container">
        {moviePosters.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={movie.poster_path.replace(/\/\//, '/')} 
              alt={movie.title} 
            />
            <p className="vote-count">Votes: {movie.vote_count}</p> 
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
