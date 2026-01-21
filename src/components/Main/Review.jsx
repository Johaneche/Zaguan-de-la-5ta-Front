

// 


function Review() {
  // Copia este código desde Google Maps (Compartir > Insertar un mapa)
  const iframeCode = `
    <iframe 
        src="https://d6d06c74dfb7464faa7ee804db6afec4.elf.site" 
        src="" 
        style="border:0;" 
        allowfullscreen="" 
        width= "300"
        height= "220"
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: iframeCode }} />
  );
}

export default Review;
