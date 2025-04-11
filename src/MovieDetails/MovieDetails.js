import "./MovieDetails.css";
import homeIcon from "../icons/home.png";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${movieId}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return response.json()
      })
      .then((data) => {
        setMovie(data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Sorry, we couldn’t load this movie.");
        setLoading(false)
      });
  }, [movieId])

  if (loading)
    return <p className="loading-message">Loading movie details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!movie) return null

  return (
    <section className="MovieDetails">
      <Link to="/" className="back-button">
        <img src={homeIcon} alt="Back to Movies" />
      </Link>

      <div className="movie-details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-backdrop"
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>
            <strong>Genres:</strong> {movie.genre_ids.join(", ")}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
