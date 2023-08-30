import Footer from "./Footer";

const TakeAway = () => {
  return (
    <>
      <section className="section-takeaway bg">
        <div className="take-away-page">
          <div className="map-container">
            <img src="public\images\map.jpg" alt="" />
          </div>
          <div className="contact-details">
            <h2>Take Away - Villa del Parque</h2>
            <p>Dirección: Av. Plaza Serrano 132, Villa del Parque, CABA</p>
            <p>Teléfono: +54 11 1234-5678</p>
            <p>Instagram: @kousyn_burgers</p>
            <p>Twitter: @kousynburger</p>
            <p>Facebook: facebook/kousyn.vdp</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TakeAway;
