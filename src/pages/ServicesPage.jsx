import imageBackground from "../../src/images/imageBackground.jpg"
import "../blocks/servicesPage.css";

function ServicesPage() {
    return (
        
        <section id="servicios" className="services-page">
            {/* Hero Image */}
            <div className="services-page__hero">
                <div className="services-page__hero-content">
                    <img className="services-page__hero-image" src={imageBackground} alt="Restarurante Zaguan" />
                    <h1 className="services-page__hero-title">Eventos con mucho sabor!</h1>
                    <h2 className="services-page__hero-subtitle">Hacemos de tu evento una experiencia inolvidable!</h2>
                </div>
                
            </div>       

            {/* Content Section */}
            <div className="services-page__content">
                <div className="services-page__container">
                    {/* Description */}
                    <div className="services-page__description">
                        <h4 className="services-page__section-title">
                            Celebra con el sabor unico de Zaguan
                        </h4>
                        <p className="services-page__section-text">
                            En Zaguan, hacemos de tu evento una experiencia inolvidable.
                            Desde entradas y platos para picar hasta opciones exquisitas para todos los gustos,
                            te ofrecemos lo mejor de nuestra cocina.
                        </p>
                    </div>

                    {/* Services Label */}
                    <p className="services-page__options-label">Opciones para tu evento:</p>

                    {/* Services Grid with Icons */}
                    <div className="services-grid">
                        <div className="service-card">
                            <h5 className="service-card__title">Eventos</h5>
                            <p className="service-card__description">
                                Celebraciones y eventos privados con menu personalizado. Bodas, cumpleanos, aniversarios y reuniones especiales.
                            </p>
                        </div>

                        <div className="service-card">
                            <h5 className="service-card__title">Menú Empresarial</h5>
                            <p className="service-card__description">
                                Menus especiales disenados para almuerzos y comidas de negocios. Atencion corporativa de alta calidad.
                            </p>
                        </div>

                        <div className="service-card">
                            <h5 className="service-card__title">Buffet y Catering</h5>
                            <p className="service-card__description">
                                Llevamos nuestro sabor a donde lo necesites en Cali, Palmira, Yumbo, Dapa y mas.
                            </p>
                        </div>
                    </div>

                    {/* Closing Text */}
                    <p className="services-page__closing-text">
                        Ya sea una reunion con amigos o familiares o un gran evento, en Zaguan nos encargamos
                        de cada detalle para que disfrutes sin preocupaciones.
                    </p>

                    {/* CTA Button */}
                    <div className="services-page__cta-container">
                        <button className="services-page__cta-btn">
                            Cotiza tu evento
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;
