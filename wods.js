function cargarWODs() {
  fetch('/bearbox/data/wods.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('wod-container');

      container.innerHTML = '';

      data.forEach(wod => {
        const card = document.createElement('div');
        card.classList.add('wod-card');
        card.innerHTML = `
          <h3>${wod.titulo}</h3>
          <p><strong>Fecha:</strong> ${wod.fecha}</p>
          <p><strong>Tipo:</strong> ${wod.tipo}</p>
          <p>${wod.contenido}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al cargar WODs:', error);
      document.getElementById('wods-container').innerHTML = '<p>No se pudieron cargar los WODs.</p>';
    });
}
