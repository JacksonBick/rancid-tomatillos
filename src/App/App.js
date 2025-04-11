import './App.css';
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const API_URL = "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies";


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [movieDetails, setMovieDetails] = useState(null)
  const [movieLoading, setMovieLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => {
        const moviesWithVotes = data.map(movie => ({
          ...movie,
          votes: movie.vote_count 
        }))
        setMovies(moviesWithVotes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setError('Sorry, we’re having trouble loading movies. Please try again later.');
        setLoading(false);
      })
  }, [])

  function updateVote(id, direction) {
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vote_direction: direction })
    })
      .then(response => response.json())
      .then(updatedMovie => {
        setMovies(prevMovies => prevMovies.map(movie =>
          movie.id === id ? { ...movie, votes: updatedMovie.vote_count } : movie
        ))
      })
      .catch(error => console.error('Error updating vote:', error));
  }

  function handleUpVote(id) {
    updateVote(id, 'up')
  }
  
  function handleDownVote(id) {
    updateVote(id, 'down')
  }

  if (loading) {
    return <p className="loading-message">Loading movies...</p>
  }

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      {error && <p className="error-message">{error}</p>} 

      <Routes>
        <Route 
          path="/" 
          element={
            <MoviesContainer 
              movies={movies}
              onUpVote={handleUpVote}
              onDownVote={handleDownVote}
            />
          } 
        />
        <Route 
          path="/:movieId" 
          element={<MovieDetails/>} 
        />
        <Route 
          path="*" 
          element={<p className="error-message">Oops! This page doesn't exist</p>} 
        />
      </Routes>
    </main>  
  ); 
}       
export default App;
