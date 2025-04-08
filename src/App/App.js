import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
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
        setMovies(data)
        setLoading(false)
      })
  }, [])

  function handleUpVote(id) {
    fetch(`${API_URL}/${id}`,{
      method: "PATCH", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vote_direction: "up" })
    })
    .then(response => response.json())
    .then(updatedMovie => {
      const updatedMovies = movies.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      );
      setMovies(updatedMovies);
    })
    .catch(error => console.error("Vote update failed:", error));
  }

  function handleDownVote(id) {
    fetch(`${API_URL}/${id}`,{
      method: "PATCH", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vote_direction: "down" })
    })
    .then(response => response.json())
    .then(updatedMovie => {
      const updatedMovies = movies.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      );
      setMovies(updatedMovies);
    })
    .catch(error => console.error("Vote update failed:", error));
  }

  // function handleUpVote(id) {
  //   const updatedMovies = movies.map(movie => {
  //     if (movie.id === id) {
  //       return { ...movie, votes: movie.votes + 1 };
  //     }
  //     return movie;
  //   });
  //   setMovies(updatedMovies);
  // }

  // function handleDownVote(id) {
  //   const updatedMovies = movies.map(movie => {
  //     if (movie.id === id) {
  //       return { ...movie, votes: movie.votes - 1 };
  //     }
  //     return movie;
  //   });
  //   setMovies(updatedMovies);
  // }

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
