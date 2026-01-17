import image from "../../../src/images/imagen-fondo1.png";


function History() {
    return(
        <section className="history">
            <div className="history__container">
                <div className="history__container_description">
                    <h2 className="history__titulo2">Nuestra Historia</h2>
                    <h1 className="history__titulo1">Zaguán de la Quinta</h1>
                    <p className="history__text">
                        Zaguán es el proyecto gastronómico de la chef Fanery Collazos, 
                        un espacio donde se expresan los auténticos sabores del territorio 
                        yumbeño bajo una visión personal y creativa.
                    </p>

                    <p className="history__text">
                        Ubicado en el corazón de Yumbo, la Capital Industrial del Valle, 
                        Zaguán ofrece el mejor servicio de comedor con una propuesta 
                        culinaria única que celebra los ingredientes locales.
                    </p>

                </div >
                    

                <div className="history__imagen_container">
                    <img className="history__imagen" src={image} alt="debe cargar la imagen" />

                </div>

                
                

            </div>
            
        </section>
    )
}

export default History;