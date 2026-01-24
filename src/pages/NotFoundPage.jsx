import { Link } from "react-router-dom";
import "../blocks/notFoundPage.css";

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <div className="not-found-page__container">
                <h1 className="not-found-page__error-code">404</h1>
                <h2 className="not-found-page__title">Página no encontrada</h2>
                <p className="not-found-page__message">
                    Lo sentimos, la página que buscas no existe.
                </p>
                <Link 
                    to="/" 
                    className="not-found-page__home-link"
                >
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
}

export default NotFoundPage;
