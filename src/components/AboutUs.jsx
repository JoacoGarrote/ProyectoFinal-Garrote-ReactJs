import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <section className="section-aboutus">
        <div className="about-us-page">
          <div className="about-us-img">
            <img src="public\images\empleados.jpg" alt="" />
          </div>
          <div className="about-us-content">
            <h1>Nuestra Historia</h1>
            <p>
              En Kousyn Burgers, nuestra pasión es crear hamburguesas
              excepcionales que deleiten tus sentidos. Comenzamos como un
              pequeño puesto en un mercado local, y a lo largo de los años,
              hemos crecido gracias al apoyo y el amor de nuestros clientes.
            </p>
            <p>
              Nos esforzamos por utilizar los ingredientes más frescos y de la
              más alta calidad en cada una de nuestras hamburguesas. Nuestro
              equipo de chefs expertos trabaja con dedicación para crear
              combinaciones de sabores únicas y emocionantes que te dejarán
              sorprendido.
            </p>
            <p>
              Valoramos la autenticidad y la conexión con nuestra comunidad. Nos
              enorgullecemos de ser una parte integral de los barrios que
              servimos y estamos comprometidos con brindar una experiencia
              gastronómica inolvidable a todos nuestros clientes.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
