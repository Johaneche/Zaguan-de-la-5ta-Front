
function MapGoogle() {
  // Copia este código desde Google Maps (Compartir > Insertar un mapa)
  const iframeCode = `
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3982.0226942236236!2d-76.4928574!3d3.5822617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30aa47e8048de5%3A0xd7b142cfb7054d7c!2sRestaurante%20Bar%20Zaguan%20de%20la%20Quinta!5e0!3m2!1ses!2sco!4v1768876224682!5m2!1ses!2sco" 
        style="border:0;" 
        allowfullscreen="" 
        width= "100%"
        height= "300"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: iframeCode }} />
  );
}

export default MapGoogle;