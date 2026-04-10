import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/LuxuryNavbar.css'

export default function LuxuryNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Removed the 'dark' prop so it defaults to the clean white/black CSS */}
      <Navbar className="navbar-luxury" sticky="top">
        <Container fluid className="navbar-container">
          
          {/* Brand Logo - Centered and acts as the 'Home' button */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand-luxury" onClick={closeMenu}>
            <span className="brand-text">YU STUDIOS</span>
          </Navbar.Brand>
          
          {/* Desktop Navigation - Pushed to the right, Home removed */}
          <Nav className="ms-auto navbar-nav-luxury desktop-nav">
            <Nav.Link as={Link} to="/vault" className="nav-link-luxury" onClick={closeMenu}>
              Vault
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-luxury" onClick={closeMenu}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-luxury" onClick={closeMenu}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-luxury nav-link-cta" onClick={closeMenu}>
              Cart
            </Nav.Link>
          </Nav>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Container>
      </Navbar>

      {/* Full-screen Overlay Menu - Home removed */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Nav.Link as={Link} to="/vault" className="mobile-nav-link" onClick={closeMenu}>
            Vault
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
            Cart
          </Nav.Link>
        </div>
      </div>
    </>
  )
}