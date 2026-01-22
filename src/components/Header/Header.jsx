import logo from "../../images/Logo-Una-Tinta-Amarillo-PNG.png";

// import { useLocation, useNavigate } from "react-router-dom";

function Header() {
//   const location = useLocation().pathname;
//   const navigate = useNavigate();

  // Función para determinar qué texto mostrar
  const getHeaderText = () => {
    if (location === "/login") {
      return "Regístrate";
    }
    if (location === "/register") {
      return "Iniciar sesión";
    }
    if (location === "/main") {
      return `Cerrar sesión`;
    }
    return "";
  };

  // Función para determinar la clase CSS
  const getHeaderClass = () => {
    if (location === "/login") {
      return "header__text";
    }
    if (location === "/register") {
      return "header__text";
    }
    if (location === "/main") {
      return "header__text";
    }
    return "";
  };

  const handleClick = () => {
    if (location === "/login") {
      navigate("/register");
    } else if (location === "/register") {
      navigate("/login");
    } else if (location === "/main") {
      onLogout();
    }
  };

  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Carga imagen del header" />
     
        <nav className="header__nav">
          <button className="header__button_close" onClick={handleClick}>X</button>

          <ul className="nav-list">  
            <li><a className="" href="#menu">Menú</a></li>
            <li><a className="" href="#menu">Quienes Somos</a></li>
            <li><a className="" href="#menu">Servicios</a></li>
            <li><a className="" href="#menu">Contacto</a></li>
          </ul>
        </nav>
      
        <button className="header__button_book">Reservar</button>
    
        <button className="header__button_open">≡</button>

              
    </header>
  );
}

export default Header;
