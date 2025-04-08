import './MoviePoster.css';
import React from 'react';


function MoviePoster({ movie, onUpVote, onDownVote, onPosterClick }) {
  return (
    <div className="movie-card" onClick={() => onPosterClick(movie)}>  
      <img 
        src={movie.poster_path}
        alt={movie.title}
      />

      <div className="vote-banner">
        <button onClick={(e) => { e.stopPropagation(); onUpVote(movie.id); }}>▲</button>
        <p className="vote-count">Votes: {movie.votes}</p>
        <button onClick={(e) => { e.stopPropagation(); onDownVote(movie.id); }}>▼</button>
      </div>
    </div>
  );
}

export default MoviePoster;