import { useState, useEffect } from 'react';
import menuPDF from '../assets/files/Menu-Zaguan.pdf';
import "../blocks/menuPage.css";

function MenuPage() {
    const [platoDelDia, setPlatoDelDia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlatoDelDia = async () => {
            try {
                // Obtener el día actual (1 = Lunes, 7 = Domingo)
                const hoy = new Date().getDay();
                const diaActual = hoy === 0 ? 7 : hoy; // Convertir domingo (0) a 7

                const response = await fetch('https://6973955db5f46f8b5827bd5e.mockapi.io/menu');
                const data = await response.json();
                
                // Filtrar por el día actual
                const plato = data.find(item => item.dia === diaActual);
                setPlatoDelDia(plato);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar el plato del día');
                setLoading(false);
            }
        };

        fetchPlatoDelDia();
    }, []);

    const handleDescargar = () => {
        window.open(menuPDF, '_blank');
    };

    if (loading) {
        return (
            <section className="menu-page">
                <div className="menu-page__container">
                    <p>Cargando...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="menu-page">
                <div className="menu-page__container">
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="menu-page">
            <div className="menu-page__container">
                {/* Header */}
                <header className="menu-page__header">
                    <p className="menu-page__subtitle">NUESTRA CARTA</p>
                    <h1 className="menu-page__title">Sabores que Conquistan</h1>
                    <p className="menu-page__description">
                        Descubre nuestra selección de platos preparados con ingredientes frescos y el
                        toque especial de la Chef Fanery
                    </p>
                </header>

                {/* Content Grid */}
                <div className="menu-page__content">
                    {/* Lado Izquierdo - Plato del Día */}
                    <div className="daily-dish">
                        <div className="daily-dish__badge">🍽️ Plato del Día</div>
                        <img 
                            src={platoDelDia?.imagen_url} 
                            alt={platoDelDia?.titulo}
                            className="daily-dish__image"
                        />
                        <div className="daily-dish__info">
                            <h2 className="daily-dish__title">{platoDelDia?.titulo}</h2>
                            <p className="daily-dish__description">{platoDelDia?.descripcion}</p>
                        </div>
                    </div>

                    {/* Lado Derecho - Preview PDF */}
                    <div className="menu-pdf">
                        <div className="menu-pdf__icon">📄</div>
                        <h3 className="menu-pdf__title">Menú Completo</h3>
                        <p className="menu-pdf__subtitle">Enero 2026</p>
                        <p className="menu-pdf__description">
                            Descarga nuestro menú completo con todos los platos a la carta, precios actualizados y
                            opciones especiales.
                        </p>
                        
                        {/* Preview del PDF */}
                        <div className="menu-pdf__preview">
                            <iframe 
                                src={menuPDF}
                                title="Preview Menú PDF"
                                className="menu-pdf__iframe"
                            />
                        </div>

                        <button onClick={handleDescargar} className="menu-pdf__download-btn">
                            Descargar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuPage;
