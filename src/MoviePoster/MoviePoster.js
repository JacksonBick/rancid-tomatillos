import './MoviePoster.css';
import React from 'react';
import { Link } from 'react-router-dom';


function MoviePoster({ movie, onUpVote, onDownVote }) {
  return (
    <div className="movie-card">
      <Link to={`/${movie.id}`}>
        <img src={movie.poster_path} alt={movie.title} />
      </Link>
      <div className="vote-banner">
        <button onClick={() => onUpVote(movie.id)}>▲</button>
        <p className="vote-count">Votes: {movie.votes}</p>
        <button onClick={() => onDownVote(movie.id)}>▼</button>
      </div>
    </div>
  );
}

export default MoviePoster;