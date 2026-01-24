// import fotos from "https://picsum.photos/200/300";
import logo1 from "../../images/steak.jpg";
import logo2 from "../../images/seafood.jpg";
import logo3 from "../../images/sangria.jpg";
import { Link } from "react-router-dom";


function Menu() {

    return (
        <section className="menu container">

            <h2 className="menu__title">Nuestras Sugerencias</h2>

            <div className="menu__container">

                <div className="menu__card">
                    <img className="menu__image" src={logo1} alt="Carga imagen del header"/>
                    <p className="menu__card-description">
                        Para los Steak lovers, distruta de los mejores cortes
                    </p>
                </div>

                <div className="menu__card">
                    <img className="menu__image" src={logo2} alt="Carga imagen del header"/>
                    <p className="menu__card-description">
                        Para los Pasta lovers, distruta de la mejor pasta
                    </p>
                </div>

                <div className="menu__card">
                    <img className="menu__image" src={logo3} alt="Carga imagen del header"/>
                    <p className="menu__card-description">
                        Distruta de los mejores cocktails para compartir
                    </p>
                </div>


            </div>

            <div className="menu__button">
                <button className="menu__button_book">
                    <Link to="/menu" className="menu__link">Ver Nuestro Menú</Link>
                </button>
            </div>

        </section>
    );
}

export default Menu;

