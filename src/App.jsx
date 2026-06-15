import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* Startpage that shows all movie posters */}
          <Route path="/" element={<Home />} />

          {/* Dynamic route for every specific film based on TMDB-ID */}
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
