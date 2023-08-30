import { useState, useContext } from "react";
import { db } from "../firebase/data";
import { collection, addDoc } from "firebase/firestore";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useForm } from "react-hook-form";

const Checkout = () => {
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
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {orderID}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(finalizarCompra)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="text"
          placeholder="Ingresá tu dirección de domicilio"
          {...register("domicilio")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
