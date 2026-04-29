import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-note">
        Material clarity, patient viewing, accountable jade.
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/vault">Vault</Link>
        <Link to="/accountability">Accountability</Link>
        <Link to="/appointment">Appointment</Link>
      </nav>
      <p className="footer-copyright">
        © {new Date().getFullYear()} YU STUDIOS
      </p>
    </footer>
  );
}
