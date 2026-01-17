// import fotos from "https://picsum.photos/200/300";

function Menu() {
    return (
        <section className="menu">
            <h2 className="menu__title1">Nuestro Menú</h2>
            <h3 className="menu__title2">Deléitate con sabores auténticos del territorio yumbeño</h3>
            <div className="menu__container">
                <div className="menu__card">
                    <h3 className="menu__card-title">Costilla</h3>
                    <p className="menu__card-description">
                        Costilla de cerdo (250gr), servida con salsa BBQ, 
                        papas confitadas y ensalada de la casa
                    </p>
                </div>

                <div className="menu__card">
                    <h3 className="menu__card-title">Costilla a la Brasa</h3>
                    <p className="menu__card-description">
                        Corte de costilla de res (250gr) braseada al carbón, 
                        flambeada con tequila, mantequilla aromatizada, 
                        salsa bbq y  guacamole.
                    </p>
                </div>

                <div className="menu__card">
                    <h3 className="menu__card-title">Cazuela</h3>
                    <p className="menu__card-description">
                        Cremosa sopa de mariscos (langostinos, camarones, pulpo, mejillones, 
                        almejas y pescado), acompañada de tostadas de 
                        plátano verde y aguacate.
                    </p>
                </div>

                <div className="menu__card">
                    <h3 className="menu__card-title">Salmón Gratinado</h3>
                    <p className="menu__card-description">
                        Salmón fresco (250gr) con puré, salsa base de aguacate, 
                        acompañado de pico de gallo y tortilla de maíz frita.
                    </p>
                </div>

                <div className="menu__card">
                    <h3 className="menu__card-title">New York Steak</h3>
                    <p className="menu__card-description">
                        Corte de res importada (300gr), sin hueso parrillado, 
                        servido con ensalada de la casa más acompañamiento a elección.
                    </p>
                </div>

                <div className="menu__card">
                    <h3 className="menu__card-title">Tomahawk</h3>
                    <p className="menu__card-description">
                        Corte de carne Angus importada (300gr). Flambeado a la mesa con tequila.
                    </p>
                </div>

            </div>


        </section>
    );
}

export default Menu;

