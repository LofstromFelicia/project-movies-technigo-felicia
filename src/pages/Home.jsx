import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const API_KEY = "3406e50e587246002bb5615e5a934297"
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=sv-SE&page=1`

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()

        setMovies(data.results)
        setLoading(false)
      } catch (error) {
        console.error("Det gick inte att hämta filmer:", error)
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) {
    return <div className="loading">Hämtar filmer till biografen...</div>
  }

  return (
    <div className="home-container">
      <header>
        <h1>Aktuella Filmer</h1>
      </header>

      <section className="movies-grid">
        {movies.map((movie) => (
          /* Link to dynamic route - movie ID */
          <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card">
            {/* TMDB only gives end of img link, so im adding base-url in front */}
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Släppt: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home