import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* BIOGRAF-HEADER */}
        <header className="global-header">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="popcorn-icon">🍿</span> LILLA BIOGRAFEN <span className="premium-tag">PREMIUM</span>
            </Link>
            <nav className="header-nav">
              <Link to="/">Aktuella filmer</Link>
              <a href="#salonger" onClick={(e) => e.preventDefault()}>Våra salonger</a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>
          <Routes>
            {/* Startpage that shows all movie posters */}
            <Route path="/" element={<Home />} />

            {/* Dynamic route for every specific film based on TMDB-ID */}
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </main>

        {/* BIOGRAF - FOOTER */}
        <footer className="global-footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Biograf Lilla Tierp. Alla rättigheter reserverade. </p>
            <p className="footer-subtext">Utvecklad med React & TMDB API | En exklusiv filmupplevelse</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
