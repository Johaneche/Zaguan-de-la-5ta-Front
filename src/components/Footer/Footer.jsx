import logo from "../../images/Logo-Full-Color-PNG.png";

function Footer() {

  return (
    <footer className="footer">
        <div className="footer__grid">
            <div>
                <h4 className="titulo4">Zaguán de la Quinta</h4>
                <img className="footer__logo" src={logo} alt="debe cargar el logo" />
            </div>
            <div>
                <h4 className="titulo4">Horario</h4>
                <p>Lunes a Sábado</p>
                <p>11.00 a.m. - 5.00 p.m.</p>
            </div>
            <div>
                <h4 className="titulo4">Contacto</h4>
                <p>📞 316 291 1068</p>
                <p>✉️ contacto@zaguandela5.com</p>
            </div>

        </div>

        <div className="footer__container">
            <p className="footer__author">© Copyright Zaguan de la Quinta</p>
        </div>
    </footer>
  );
}

export default Footer;
