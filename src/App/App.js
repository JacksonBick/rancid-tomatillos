import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieDetails from '../MovieDetails/MovieDetails';

const API_URL = "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies";


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        const moviesWithVotes = data.map(movie => ({
          ...movie,
          votes: movie.vote_count 
        }));
        setMovies(moviesWithVotes);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  function updateVote(id, direction) {
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vote_direction: direction })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update vote');
        }
        return response.json();
      })
      .then(updatedMovie => {
        setMovies(prevMovies => prevMovies.map(movie =>
          movie.id === id ? { ...movie, votes: updatedMovie.vote_count } : movie
        ));
      })
      .catch(error => console.error('Error updating vote:', error));
  }
  
  function handleUpVote(id) {
    updateVote(id, 'up');
  }
  
  function handleDownVote(id) {
    updateVote(id, 'down');
  }

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);  
  };

  const handleBackToList = () => {
    setSelectedMovie(null);  
  };

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
  
      {selectedMovie ? (
        <MovieDetails 
          movieDetails={selectedMovie} 
          onBackClick={handleBackToList} 
        />
      ) : (
        <MoviesContainer 
          movies={movies}  
          onUpVote={handleUpVote}
          onDownVote={handleDownVote}
          onPosterClick={handleMovieClick}
        />
      )}
    </main>  
  ); 
}       
export default App;
