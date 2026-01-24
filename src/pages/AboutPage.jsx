import imageProfile from "../../src/images/chef-fanery.jpg";
import imagePlace from "../../src/images/restaurant-ambience.jpg";
import "../blocks/aboutPage.css";

function AboutPage() {
    return (
        <section className="about-page">
            
            <div className="about-page__hero">
                <img className="about-page__hero-image" src={imagePlace} alt="Restarurante Zaguan" />
                <div className="about-page__hero-content">
                    <span className="about-page__hero-subtitle">Quiénes Somos</span>
                    <h1 className="about-page__hero-title">Donde la Tradición se Encuentra con la Innovación</h1>
                </div>
            </div>
            
            {/* Historia Section - Timeline style */}
            <div className="about-page__timeline">
               
                {/* Timeline */}
                <div className="timeline">
                    <div className="timeline__container">
                        <h2 className="timeline__title">Nuestra Historia</h2>
                        {/* Timeline item 1 */}
                        <div className="timeline__item">
                            <div className="timeline__marker timeline__marker--start"></div>
                            <span className="timeline__label">El Comienzo</span>
                            <h3 className="timeline__item-title">Un Sueño en Yumbo</h3>
                            <p className="timeline__item-text">
                                La Chef Fanery Collazos, nacida y criada en el Valle del Cauca, siempre soñó con
                                un espacio donde pudiera expresar su amor por la cocina colombiana. En 2014, ese
                                sueño se materializó en las calles de Yumbo, la Capital Industrial del Valle.
                            </p>
                        </div>

                        {/* Timeline item 2 */}
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <span className="timeline__label">La Inspiración</span>
                            <h3 className="timeline__item-title">El Concepto de Zaguán</h3>
                            <p className="timeline__item-text">
                                El zaguán, ese espacio de transición en las casas coloniales, representa la
                                bienvenida y el encuentro. Quisimos crear ese mismo sentimiento: un lugar donde
                                la tradición abraza la innovación y cada visitante se siente en casa.
                            </p>
                        </div>

                        {/* Timeline item 3 */}
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <span className="timeline__label">Hoy</span>
                            <h3 className="timeline__item-title">Referente Gastronómico</h3>
                            <p className="timeline__item-text">
                                Con más de una década de experiencia, Zaguán se ha convertido en un referente de la
                                gastronomía vallecaucana, reconocido por elevar los sabores locales a nuevas alturas
                                sin perder la esencia de nuestras raíces.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="chef-profile">
                    {/* Chef Profile Card */}
                    <div className="chef-profile__card">
                        <div className="chef-profile__image-container">
                            <img className="chef-profile__image" src={imageProfile} alt="Chef Fanery Collazos" />
                        </div>
                        <div className="chef-profile__content">
                            <div className="chef-profile__role-container">
                                <span className="chef-profile__role">Chef & Fundadora</span>
                            </div>
                            <h3 className="chef-profile__name">Fanery Collazos</h3>
                            <p className="chef-profile__description">
                                Con formación en las mejores escuelas culinarias del país y una pasión innata
                                por los sabores de su tierra, Fanery ha dedicado su vida a dignificar la cocina
                                colombiana.
                            </p>
                            <div className="chef-profile__stats">
                                <div className="stat">
                                    <p className="stat__number">10+</p>
                                    <p className="stat__label">Años</p>
                                </div>
                                <div className="stat">
                                    <p className="stat__number">50+</p>
                                    <p className="stat__label">Recetas</p>
                                </div>
                                <div className="stat">
                                    <p className="stat__number">5k+</p>
                                    <p className="stat__label">Clientes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    );
}

export default AboutPage;
