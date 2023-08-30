import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, precioFinal, emptyCart, removeCart } =
    useContext(ShoppingCartContext);

  const vaciar = () => {
    emptyCart();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {cart.map((p) => (
        <div key={p.id}>
          <br />
          <h3>{p.name}</h3>
          <p>Precio unit: ${p.price}</p>
          <p>Precio total: ${p.price * p.qty}</p>
          <p>Cant: {p.qty}</p>
          <button onClick={() => removeCart(p.id)}>Eliminar producto</button>
          <br />
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <h2>Precio total: ${precioFinal()}</h2>
          <button onClick={vaciar}>Vaciar</button>
          <button>
            <Link to="/checkout">Finalizar compra</Link>
          </button>
        </>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};
export default Cart;
