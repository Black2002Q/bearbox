document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  const nav = `
  <nav class="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
    <div class="container-fluid">

      <a class="navbar-brand" href="index.html">
        <img src="Bear.jpg" width="120" height="80" alt="BearBox Logo">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link ${currentPath.endsWith("index.html") || currentPath === "/bearbox/" ? "active" : ""}" href="index.html">
              <i class="bi bi-houses-fill me-2"></i>Inicio
            </a>
          </li>

          
               <li class="nav-item">
            <a class="nav-link ${currentPath.includes("about.html") ? "active" : ""}" href="about.html">
             <i class="bi bi-person-fill-exclamation"></i> Acerca de  
            </a>
          </li>


               <li class="nav-item">
            <a class="nav-link ${currentPath.includes("horarios.html") ? "active" : ""}" href="horarios.html">
              <i class="bi bi-stopwatch-fill"></i> Horarios
            </a>
          </li>


          <li class="nav-item">
            <a class="nav-link ${currentPath.includes("ubicacion.html") ? "active" : ""}" href="ubicacion.html">
              <i class="bi bi-geo-alt-fill me-2"></i>Ubicación
            </a>
          </li>

                    <li class="nav-item">
            <a class="nav-link ${currentPath.includes("galeria.html") ? "active" : ""}" href="galeria.html">
              <i class="bi bi-camera-fill"></i> Galeria
              
            </a>
          </li>

                    <li class="nav-item">
            <a class="nav-link ${currentPath.includes("contacto.html") ? "active" : ""}" href="contacto.html">
              <i class="bi bi-envelope-fill me-2"></i>Contacto
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", nav);
});
