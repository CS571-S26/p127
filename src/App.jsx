import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LuxuryNavbar from './components/LuxuryNavbar'
import Footer from './components/Footer'
import Home from "./components/pages/Home.jsx";
import Vault from "./components/pages/Vault.jsx";
import './App.css'

function App() {
  return (
    <Router>
      <LuxuryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
