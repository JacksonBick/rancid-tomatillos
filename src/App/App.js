import './App.css';
import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster'; 

function App() {
  const [movies, setMovies] = useState(
    moviePosters.map(movie => ({
      ...movie,
      votes: movie.vote_count
    }))
  );

  function handleUpVote(id) {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, votes: movie.votes + 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  }

  function handleDownVote(id) {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, votes: movie.votes - 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>

      <MoviesContainer 
        movies={movies}  
        onUpVote={handleUpVote}
        onDownVote={handleDownVote}
      />
    </main>
  );
}

export default App;
