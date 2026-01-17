import logo from "../../images/Logo-Full-Color-PNG.png";

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
        <img className="header__image" src={logo} alt="Carga imagen del header" />
        
        
        <div className="header__container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <p href="#menu" className="header__menu">
                Menú
            </p>

            <p href="#about" className="header__about">
                Acerca de
            </p>

            <p href="#services" className="header__services">
                Servicios
            </p>
            
            <p href="#contact" className="header__contact">
                Contacto
            </p>
           
        </div>

        <div className="header__button">
            <button className="header__button_book">Reservar</button>
        </div>
        

        
    </header>
  );
}

export default Header;
