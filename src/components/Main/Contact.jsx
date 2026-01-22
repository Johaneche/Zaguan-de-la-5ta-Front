import imglocation from "../../../src/images/location.png";
import imgphone from "../../../src/images/phone.png";
import imgtime from "../../../src/images/time.png";
import imgEmail from "../../../src/images/imgEmail.png";

import MapaGoogle from "./MapGoogle";
import Review from "./Review";



function Contact() {
    return (
        <main className="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <h2 className="contact__subtitle">CONTACTO</h2>
                    <h1 className="contact__title">Ven a conocernos</h1>
                    <p className="contact__text">
                        Te esperamos en nuestro restaurante para brindarte una 
                        experiencia culinaria unica
                    </p>

                </div>

                <div className="contact__information">

                    <div className="contact__description_container">

                        <div className="contact__container contact__container_location">
                            <div className="image__container">
                                <img className="image__card image__location" src={imglocation} alt="debe cargar logo" />
                            </div>
                            <div className="card__description">
                                <h3 className="card__title">Dirección</h3>
                                <p className="card__description">
                                    Calle 5 No. 11 - 33, Barrio Bolivar

                                </p>
                                <p className="card__description">
                                    Yumbo, Valle del Cauca, Colombia
                                </p>
                                <a className="card__link" href="http://">Ver en Google Maps →</a>
                            </div>
                        </div>

                        <div className="contact__container_atention">
                            <div className="image__container">
                                <img className="image__atention" src={imgtime} alt="debe cargar logo" />
                            </div>
                            <div className="card__description">
                                <h3 className="card__title">Horario de Atención</h3>
                                <p className="card__description">
                                    Lunes - Sábado:  11:00 a.m. - 5:00 p.m.
                                </p>
                                <p className="card__description">
                                    Domingos:  Cerrado
                                </p>
                            </div>
                        </div>

                        <div className="card__container">
                            <div className="image__container">
                                <img className="image__location" src={imgphone} alt="debe cargar logo" />
                            </div>
                            <div className="card__description_container">
                                <h3 className="card__title">Telefonos</h3>
                                <p className="card__description">
                                    669 1673 - Fijo
                                </p>
                                <p className="card__description">
                                    316 291 1068 - WhatsApp
                                </p>
                            </div>
                        </div>

                        <div className="card__container">
                            <div className="image__container">
                                <img className="image__location" src={imgEmail} alt="debe cargar logo" />
                            </div>
                            <div className="card__description_container">
                                <h3 className="card__title">Correo</h3>
                                <p className="card__description">
                                    contacto@zaguandela5.com
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="contact__max">

                        <div className="contact__location">
                            <MapaGoogle/>
                        </div>
                        
                        <div>
                            <h3>Reseñas</h3>
                            <Review/>
                        </div>


                    </div>

                    

                </div>

                

            </div>

        </main>
    );
}

export default Contact;