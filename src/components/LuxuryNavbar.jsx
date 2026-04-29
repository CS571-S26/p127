import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/LuxuryNavbar.css'

export default function LuxuryNavbar({ trayCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <Navbar className="navbar-luxury">
        <Container fluid className="navbar-container">
          <Navbar.Brand as={Link} to="/" className="navbar-brand-luxury" onClick={closeMenu}>
            <span className="brand-mark">YU</span>
            <span className="brand-text">Yu Studios</span>
          </Navbar.Brand>

          <Nav className="navbar-nav-luxury desktop-nav" aria-label="Primary navigation">
            <Nav.Link as={Link} to="/vault" className="nav-link-luxury" onClick={closeMenu}>
              Vault
            </Nav.Link>
            <Nav.Link as={Link} to="/accountability" className="nav-link-luxury" onClick={closeMenu}>
              Accountability
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment" className="nav-link-luxury" onClick={closeMenu}>
              Appointment
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-luxury nav-link-cta" onClick={closeMenu}>
              Reserve Tray{trayCount > 0 ? ` (${trayCount})` : ''}
            </Nav.Link>
          </Nav>

          <button
            className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Container>
      </Navbar>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <Nav className="mobile-menu-content" aria-label="Mobile navigation">
          <Nav.Link as={Link} to="/vault" className="mobile-nav-link" onClick={closeMenu}>
            Vault
          </Nav.Link>
          <Nav.Link as={Link} to="/accountability" className="mobile-nav-link" onClick={closeMenu}>
            Accountability
          </Nav.Link>
          <Nav.Link as={Link} to="/appointment" className="mobile-nav-link" onClick={closeMenu}>
            Appointment
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
            Reserve Tray{trayCount > 0 ? ` (${trayCount})` : ''}
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}
