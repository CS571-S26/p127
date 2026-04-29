import { Link } from 'react-router-dom'
import '../styles/Hero.css'
import heroImage from '../assets/generated-jade/pale-river-pendant.png'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" className="hero-image" />
      </div>
      <div className="hero-content">
        <p className="hero-kicker">Accountable jade objects</p>
        <h1 className="hero-title">YU STUDIOS</h1>
        <p className="hero-subtitle">
          Quiet jade objects selected for origin, treatment clarity, and daily stillness.
        </p>
        <div className="hero-actions">
          <Link to="/vault" className="hero-link primary">View the Vault</Link>
          <Link to="/accountability" className="hero-link">Our Standard</Link>
        </div>
      </div>
    </section>
  )
}
