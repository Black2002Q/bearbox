const footer = document.createElement('div');
footer.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    .footer {
      background-color: #000;
      color: #ddd;
      padding: 50px 20px;
      font-family: 'Poppins', sans-serif;
    }

    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section {
      flex: 1;
      min-width: 250px;
      text-align: center;
    }

    .footer-logo {
      display: block;
      margin: 20px auto 0;
      max-width: 100px;
      border-radius: 50%;
    }

    .footer h2, .footer h3 {
      color: #f5a623;
      margin-bottom: 20px;
    }

    .footer p {
      color: #ccc;
      line-height: 1.6;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }

    .contact-details i,
    .social-links i {
      color: #f5a623;
      margin-right: 8px;
    }

    .social-links {
      list-style: none;
      padding: 0;
    }

    .social-links li {
      margin-bottom: 10px;
    }

    .social-links a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #fff;
    }

    .copyright {
      text-align: center;
      font-size: 0.85rem;
      margin-top: 40px;
      color: #666;
    }

    hr {
      border: none;
      border-top: 1px solid #333;
      margin: 30px auto;
      width: 90%;
    }

    @media screen and (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  </style>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h2>BearBox 2023</h2>
        <p>Forjamos atletas. Transformamos vidas. Únete a una comunidad que vive el CrossFit con pasión y disciplina.</p>
        <img src="logo.png" alt="BearBox Logo" class="footer-logo">
      </div>

      <div class="footer-section">
        <h3>Contacto</h3>
        <div class="contact-details">
          <p><i class="fas fa-phone-alt"></i> +593 ##########</p>
          <p><i class="fas fa-map-marker-alt"></i> Ciudadela Italiana, Av. Quito entre Plácido Lainez</p>
          <p><i class="fas fa-clock"></i> Lunes a Viernes: 6:15 AM - 9:15 PM</p>
        </div>
      </div>

      <div class="footer-section">
        <h3>Redes Sociales</h3>
        <ul class="social-links">
          <li>
            <a href="https://www.instagram.com/bearbox_23/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr>
    <p class="copyright">© 2025 BearBox23 CrossFit | Desarrollado por Ing. Moises Balón Malavé</p>
  </footer>
`;

document.body.appendChild(footer);
