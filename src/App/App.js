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
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieLoading, setMovieLoading] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json()) 
      .then(data => {
        setMovies(data)
        setLoading(false)
      })
  }, [])

  const fetchMovieDetails = (id) => {
    setMovieLoading(true)
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
        setMovieLoading(false)
      })
  };


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

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
    fetchMovieDetails(movie.id)
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
          movieDetails={movieDetails} 
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
