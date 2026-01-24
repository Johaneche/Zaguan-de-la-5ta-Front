// import logo from "../../images/Logo-Full-Color-PNG.png";
// import logo from "../../images/Logo-Una-Tinta-Amarillo-PNG.png";
import { Link } from "react-router-dom";
import logo from "../../images/Logo-Horizontal-Una-Tinta-Amarillo-PNG.png";
import iconFacebook from "../../images/icon-facebook.png";
import iconInstagram from "../../images/icon-instagram.png";
import iconWhatsApp from "../../images/icon-whatsapp.png";
import iconEmail from "../../images/imgEmail.png";

function Footer() {

    const links = {
        facebook: "https://www.facebook.com/zaguandela5",
        instagram: "https://www.instagram.com/zaguandela5",
        mail: "mailto:contacto@zaguandela5.com",
        whatsapp: "https://wa.me/3162911068"
    };


    function openFacebook() {
        window.open("https://www.facebook.com/zaguandela5", "_blank", "noopener,noreferrer");
    }
    function openInstagram() {
        window.open("https://www.instagram.com/zaguandela5", "_blank", "noopener,noreferrer");
    }
    function openMail() {
        window.open("mailto:elcorreoquequieres@correo.com", "_blank", "noopener,noreferrer");
    }
    function openWhatsApp() {
        window.open("https://wa.me/3162911068", "_blank", "noopener,noreferrer");
    }

    function openLink() {
        window.open("https://wa.me/3162911068", "_blank", "noopener,noreferrer");
    }


  return (
    <footer className="footer container">
        <div className="footer__container">
            <div>
                <img className="footer__logo" src={logo} alt="debe cargar el logo" onClick={()=>{ window.scrollTo({ top: 0, behavior: "smooth" }) }} />
            </div>

            <div className="footer__media"> 
                <div>
                    <h4 className="footer__subtitle">Seguinos en</h4>
                    <img className="footer__logo-facebook" src={iconFacebook} alt="debe cargar el logo" onClick={openFacebook} />
                    <img className="footer__logo-facebook" src={iconInstagram} alt="debe cargar el logo" onClick={openInstagram}/>
                    <img className="footer__logo-facebook" src={iconEmail} alt="debe cargar el logo" onClick={openMail}/>
                </div>
                <div className="footer__contact">
                    <img className="footer__logo-facebook" src={iconWhatsApp} alt="debe cargar el logo" onClick={openWhatsApp}/>
                    <h4 className="footer__subtitle">316 291 1068</h4>
                </div>

            </div>

        </div>

        <div className="footer__container">
            <p className="footer__author">© Copyright Zaguan de la Quinta</p>
        </div>
    </footer>
  );
}

export default Footer;
