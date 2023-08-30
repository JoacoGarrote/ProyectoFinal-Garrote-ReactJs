import ItemListContainer from "./ItemListContainer";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-banner">
          <h1 className="h1-banner">
            <a className="a-banner" href="#productos-home">
              HAMBURGUESAS, POSTA
            </a>
          </h1>
        </div>
        <div className="home-info">
          <div className="container">
            <h3 className="h3-info">Disfrutá de lo que mejor sabemos hacer</h3>
            <p className="p-info">
              Nuestras hamburguesas están hechas a mano con los ingredientes más
              frescos y auténticos. Desde las clásicas favoritas hasta
              creaciones únicas que desafían tu lengua, cada bocado es un
              festín. Nuestra variedad de productos tiene algo para todos. ¡Vení
              y disfrutá de una experiencia inolvidable en Kousyn Burgers!
            </p>
          </div>
          <div className="container">
            <img
              className="img-info"
              src="public\images\homebanner.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="productos-home" className="productos-home">
        <h1 className="h1-home-productos">Nuestros productos:</h1>
        <ItemListContainer />
      </section>
    </>
  );
};

export default Home;
