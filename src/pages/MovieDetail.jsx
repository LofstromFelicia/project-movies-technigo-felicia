import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const MovieDetail = () => {
  // fetch id from URL
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  const API_KEY = "3406e50e587246002bb5615e5a934297"
  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=sv-SE`

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(DETAIL_URL)
        const data = await response.json()
        setMovie(data)
        setLoading(false)
      } catch (error) {
        console.error("Kunde inte hämta filmdetaljer:", error)
        setLoading(false)
      }
    }

    fetchMovieDetail()
  }, [id])

  if (loading) {
    return <div className="loading">Ladddar filmdetaljer...</div>
  }

  if (!movie) {
    return <div className="error">Kunde inte hitta filmen!</div>
  }

  return (
    <div className="movie-detail-page">
      {/* Back link to cinema homepage */}
      <Link to="/" className="back-button">← Tillbaka till alla filmer</Link>

      <div className="detail-hero">
        {/* Big pic (backdrop) */}
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt=""
          className="backdrop-img"
        />

        <div className="detail-content">
          {/* Filmaffisch */}
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className="poster-img"
          />

          <div className="text-side">
            <h1>{movie.title}</h1>
            <p className="tagline"><em>{movie.tagline}</em></p>
            <div className="meta-info">
              <span>⭐️ {movie.vote_average.toFixed(1)} / 10</span>
              <span>🕒 {movie.runtime} min</span>
              <span>📅 {movie.release_date}</span>
            </div>
            <h2>Handling</h2>
            <p className="overview">{movie.overview || "Ingen svensk beskrivning tillgänglig."}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail