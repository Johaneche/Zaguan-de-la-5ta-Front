import logo from "../../images/Logo-Una-Tinta-Amarillo-PNG.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.querySelector('.contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Abrir nueva ventana de WhatsApp
  function handleClick (e){
    window.open("https://wa.me/3162911068", "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="header">
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src={logo} alt="Logo Zaguán de la Quinta" onClick={()=>{ window.scrollTo({ top: 0, behavior: "smooth" }) }}/>
          </Link>
       
          <nav className="header__nav-desktop">
            <ul className="nav-list">  
              <li><Link to="/menu">Menú</Link></li>
              <li><Link to="/quienes-somos">Quienes Somos</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><a href="#contact" onClick={scrollToContact}>Contacto</a></li>
            </ul>
          </nav>
        
          <button className="header__button_book" onClick={handleClick}>Reservar</button>
      
          <button 
            className={`header__button_open ${isMenuOpen ? 'header__button_open_active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
      </header>

      {/* Menú móvil fuera del header */}
      <nav className={`header__nav-mobile ${isMenuOpen ? 'header__nav-mobile_visible' : ''}`}>
        <button 
          className="header__button_close" 
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <ul className="nav-list-mobile">  
          <li><Link to="/menu">Menú</Link></li>
          <li><Link to="/quienes-somos">Quienes Somos</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><a href="#contact" onClick={scrollToContact}>Contacto</a></li>
        </ul>
      </nav>

      {/* Overlay para cerrar el menú al hacer click fuera */}
      {isMenuOpen && (
        <div 
          className="header__overlay" 
          onClick={toggleMenu}
          role="button"
          onKeyDown={(e) => e.key === 'Escape' && toggleMenu()}
          aria-label="Cerrar menú"
        />
      )}
    </>
  );
}

export default Header;
