import { useState, useContext, useEffect } from "react";
import { db } from "../firebase/data";
import { collection, addDoc } from "firebase/firestore";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import Loader from "./Loader";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  const [orderID, setOrderID] = useState("");
  const { cart, emptyCart, precioFinal } = useContext(ShoppingCartContext);
  const { register, handleSubmit } = useForm();

  const finalizarCompra = (datos) => {
    const order = {
      usuario: datos,
      productos: cart,
      total: precioFinal(),
    };

    const sendOrder = collection(db, "ordenes");

    addDoc(sendOrder, order).then((doc) => {
      setOrderID(doc.id);
      emptyCart();
    });
  };

  if (orderID) {
    return (
      <>
        <section className="section-orderID">
          <div className="container orderID">
            <h1 className="h1-order">¡Muchas gracias por tu compra!</h1>
            <p className="p-order">Tu número de órden es: {orderID}</p>
            <Link to="/">
              <button className="btn-order">Volver</button>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <section className="section-checkout">
            <h1 className="form-h1">Finalizá tu compra:</h1>
            <div className="form-div">
              <form className="form" onSubmit={handleSubmit(finalizarCompra)}>
                <input
                  type="text"
                  placeholder="Ingresá tu nombre"
                  required
                  {...register("nombre")}
                />
                <input
                  type="text"
                  placeholder="Ingresá tu dirección de domicilio"
                  required
                  {...register("domicilio")}
                />
                <input
                  type="email"
                  placeholder="Ingresá tu e-mail"
                  required
                  {...register("email")}
                />
                <input
                  type="phone"
                  placeholder="Ingresá tu teléfono"
                  required
                  {...register("telefono")}
                />

                <button className="btn-enviar" type="submit">
                  Comprar
                </button>
              </form>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
