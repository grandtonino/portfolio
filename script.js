// Al hacer click en una fila de proyecto de cinematografía,
// se despliega el reproductor de Vimeo y carga el video (lazy load).
document.querySelectorAll('.film-row').forEach((row) => {
  row.style.cursor = 'pointer';
  row.addEventListener('click', () => {
    const isActive = row.classList.contains('active');

    // cierra las demás filas abiertas
    document.querySelectorAll('.film-row.active').forEach((r) => {
      if (r !== row) {
        r.classList.remove('active');
        r.querySelector('iframe').src = '';
      }
    });

    if (isActive) {
      row.classList.remove('active');
      row.querySelector('iframe').src = '';
    } else {
      row.classList.add('active');
      const videoUrl = row.getAttribute('data-video');
      const iframe = row.querySelector('iframe');
      if (videoUrl && iframe) {
        iframe.src = videoUrl;
      }
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
