import './MoviePoster.css';
import React from 'react';

function MoviePoster({ movie }) {
  return (
    <div className="movie-card">
      <img 
        src={movie.poster_path.replace(/\/\//, '/')} 
        alt={movie.title} 
      />
      <p className="vote-count">Votes: {movie.vote_count}</p>
    </div>
  );
}

export default MoviePoster;