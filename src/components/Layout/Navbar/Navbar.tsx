import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Insights' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>Rafael</span>
            <span className={styles.logoSubtext}>Lebre</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navMenu}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.path} className={styles.mobileNavItem}>
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </nav>
  )
}

export default Navbar