import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react'; // "Hey React, track this data and re-render if it changes"
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState(moviePosters); // hook, lets you update that stateful data, automatically re-renders this component when data changes
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header> 

      <MoviesContainer movies={movies} /> {/* render this child component passing movies as a prop */}
    </main>
  );
}

export default App;
