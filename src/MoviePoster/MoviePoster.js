import './MoviePoster.css';
import React from 'react';

function MoviePoster({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img 
        src={movie.poster_path.replace(/\/\//, '/')} 
      />
      <p className="vote-count">Votes: {movie.vote_count}</p>
    </div>
  );
}

export default MoviePoster;