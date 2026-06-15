import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ticketCount, setTickedCount] = useState(2)
  const [isPurchased, setIsPurchased] = useState(false)

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
  }, [id, DETAIL_URL])

  if (loading) {
    return <div className="loading">Ladddar filmdetaljer...</div>
  }

  if (!movie) {
    return <div className="error">Kunde inte hitta filmen!</div>
  }

  const handleBuyTickets = () => {
    setIsPurchased(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsPurchased(false)
    setTickedCount(2)
  }

  return (
    <div className="movie-detail-page">
      <Link to="/" className="back-button">← Tillbaka till alla filmer</Link>

      <div className="detail-hero">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
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

            {/* KÖP KNAPPEN */}
            <button className="buy-ticket-btn" onClick={() => setIsModalOpen(true)}>
              🎟️ Köp Biljetter
            </button>
          </div>
        </div>
      </div>

      {/* BILJETTSIMULERING (MODAL) */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-modal-btn" onClick={handleCloseModal}>&times;</button>

            {!isPurchased ? (
              // Step 1: Välj biljetter
              <div className="modal-booking">
                <h2>Boka Biljetter till {movie.title}</h2>
                <p className="salong-info">Salong: Stora Salongen | Idag kl. 19:00</p>

                <div className="ticket-picker">
                  <div className="picker-label-side">
                    <label>Antal Biljetter:</label>
                    <span className="price-per-ticket">145 kr / st</span>
                  </div>

                  <div className="counter-box">
                    {/* MINUS KNAPP */}
                    <button
                      type="button"
                      className="counter-btn"
                      disabled={ticketCount <= 1}
                      onClick={() => setTickedCount(ticketCount - 1)}
                    >
                      -
                    </button>

                    {/* Antal valda */}
                    <span className="ticket-amount">{ticketCount}</span>

                    {/* PLUS KNAPP */}
                    <button
                      type="button"
                      className="counter-btn"
                      disabled={ticketCount >= 10}
                      onClick={() => setTickedCount(ticketCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="price-info">
                  <span>Totalt pris:</span>
                  <span>{ticketCount * 145} kr</span>
                </div>

                <button className="confirm-purchase-btn" onClick={handleBuyTickets}>
                  Bekräfta & Slutför köp
                </button>
              </div>
            ) : (
              // Steg 2: Köpet klart, visa biobiljett
              <div className="modal-ticket-success">
                <div className="success-badge">✓ Köp Bekräftat!</div>
                <h2>Dina digitala biljetter</h2>

                <div className="cinema-ticket">
                  <div className="ticket-header">
                    <h3>LILLA BIOGRAFEN</h3>
                    <span className="ticket-type">PREMIUM</span>
                  </div>
                  <div className="ticket-body">
                    <h4>{movie.title}</h4>
                    <p><strong>Tid:</strong> Idag kl. 19:00</p>
                    <p><strong>Antal platser:</strong> {ticketCount} st (Rad 6, Platser i mitten)</p>
                    <p className="ticket-code">Bokningskod: <strong>{Math.random().toString(36).substring(2, 8).toUpperCase()}</strong></p>
                  </div>
                  <div className="ticket-qr">
                    {/* SIMULATED QR CODE */}
                    <div className="barcode"></div>
                  </div>
                </div>

                <p className="ticket-instructions">Biljetterna har även skickats till din app/mobil. Kiosken öppnar 30 min innan filmstart! Välkommen!</p>
                <button className="done-btn" onClick={handleCloseModal}>Stäng</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetail