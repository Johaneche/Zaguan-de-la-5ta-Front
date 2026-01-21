// import logo from "../../images/Logo-Full-Color-PNG.png";
// import logo from "../../images/Logo-Una-Tinta-Amarillo-PNG.png";
import logo from "../../images/Logo-Horizontal-Una-Tinta-Amarillo-PNG.png";
import iconFacebook from "../../images/icon-facebook.png";
import iconInstagram from "../../images/icon-instagram.png";
import iconWhatsApp from "../../images/icon-whatsapp.png";
import iconEmail from "../../images/imgEmail.png";

function Footer() {

  return (
    <footer className="footer container">
        <div className="footer__container">
            <div>
                {/* <h4 className="footer__title footer__title-primary">Zaguán de la Quinta</h4> */}
                <img className="footer__logo" src={logo} alt="debe cargar el logo" />
            </div>

            <div className="footer__media"> 
                <div>
                    <h4 className="footer__subtitle">Seguinos en</h4>
                    <img className="footer__logo-facebook" src={iconFacebook} alt="debe cargar el logo" />
                    <img className="footer__logo-facebook" src={iconInstagram} alt="debe cargar el logo" />
                    <img className="footer__logo-facebook" src={iconEmail} alt="debe cargar el logo" />
                </div>
                <div className="footer__contact">
                    <img className="footer__logo-facebook" src={iconWhatsApp} alt="debe cargar el logo" />
                    <h4 className="footer__subtitle">316 291 1068</h4>
                </div>

                {/* <img className="footer__logo-facebook" src={iconWhatsApp} alt="debe cargar el logo" />
                <h4 className="footer__subtitle">316 291 1068</h4> */}

            </div>

        </div>

        <div className="footer__container">
            <p className="footer__author">© Copyright Zaguan de la Quinta</p>
        </div>
    </footer>
  );
}

export default Footer;
