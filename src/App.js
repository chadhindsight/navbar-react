import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Router } from "react-router-dom"
import Navbar from "./NavBar"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Router>
      </div>
    </>
  )
}

export default App