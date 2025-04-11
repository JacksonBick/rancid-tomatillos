import "./MoviesContainer.css";
import MoviePoster from "../MoviePoster/MoviePoster";

function MoviesContainer({ movies, onUpVote, onDownVote }) {
  return (
    <section className="movie-container">
      {movies.map((movie) => (
        <MoviePoster
          key={movie.id}
          movie={movie}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      ))}
    </section>
  )
}

export default MoviesContainer;
