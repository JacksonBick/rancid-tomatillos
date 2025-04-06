import './MoviePoster.css';
import React from 'react';


function MoviePoster({ movie, onUpVote, onDownVote, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img 
        src={movie.poster_path.replace(/\/\//, '/')} 
      />

      <div className="vote-banner">
        <button onClick={() => onUpVote(movie.id)}>▲</button>
        <p className="vote-count">Votes: {movie.votes}</p>
        <button onClick={() => onDownVote(movie.id)}>▼</button>
      </div>
    </div>
  );
}

export default MoviePoster;