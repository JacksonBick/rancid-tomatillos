import './MoviePoster.css';
import React from 'react';

function MoviePoster({ movie, onUpVote, onDownVote }) {
  return (
    <div className="movie-card">
      <img 
        src={movie.poster_path.replace(/\/\//, '/')} 
        alt={movie.title} 
      />

      <div className="vote-banner">
        <button onClick={() =>onUpVote(movie.id)}>⬆️</button>
        <p className="vote-count">Votes: {movie.vote_count}</p>
        <button onClick={() =>onDownVote(movie.id)}>⬇️</button>
      </div>
    </div>
  );
}

export default MoviePoster;