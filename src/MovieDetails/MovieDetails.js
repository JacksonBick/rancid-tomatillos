import './MovieDetails.css';

function MovieDetails({ movieDetails, onBackClick }) {
  return (
    <section className='MovieDetails'>
      <button onClick={onBackClick} className="back-button">Back to Movies</button>
      <div className="movie-details-container">
        <img 
          src={movieDetails.backdrop_path.replace(/\/\//, '/')}
          alt={movieDetails.title}
          className="movie-backdrop"
        />
        <div className="movie-info">
          <h2>{movieDetails.title}</h2>
          <p><strong>Genres:</strong> {movieDetails.genre_ids.join(', ')}</p>
          <p><strong>Overview:</strong> {movieDetails.overview}</p>
          <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;