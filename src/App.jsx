import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LuxuryNavbar from './components/LuxuryNavbar'
import Footer from './components/Footer'
import Home from "./components/pages/Home.jsx";
import Vault from "./components/pages/Vault.jsx";
import ProductDetail from './components/pages/ProductDetail.jsx'
import Cart from './components/pages/Cart.jsx'
import Appointment from './components/pages/Appointment.jsx'
import Accountability from './components/pages/Accountability.jsx'
import NotFound from './components/pages/NotFound.jsx'
import { useReserveTray } from './hooks/useReserveTray.js'
import './App.css'

function App() {
  const reserveTray = useReserveTray()

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <LuxuryNavbar trayCount={reserveTray.trayCount} />
      <Routes>
        <Route path="/" element={<Home reserveTray={reserveTray} />} />
        <Route path="/vault" element={<Vault reserveTray={reserveTray} />} />
        <Route path="/piece/:productId" element={<ProductDetail reserveTray={reserveTray} />} />
        <Route path="/cart" element={<Cart reserveTray={reserveTray} />} />
        <Route path="/appointment" element={<Appointment reserveTray={reserveTray} />} />
        <Route path="/accountability" element={<Accountability />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
