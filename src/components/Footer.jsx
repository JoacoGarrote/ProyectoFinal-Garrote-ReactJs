const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/images/kousynlogoblanco.png"
            alt="Logotipo de la tienda, Kousyn Burgers"
          />
        </div>
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/sobrenosotros">Contacto</a>
          <a href="/takeaway">Take away</a>
        </div>
        <div className="footer-social">
          <a
            className="fa-brands"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className="fa-brands"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="fa-brands"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Kousyn Burgers. Todos los derechos
        reservados. - Hecho por Joaquín Garrote, curso React Js
      </p>
    </footer>
  );
};

export default Footer;
