import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import Footer from "./Footer";

const Cart = () => {
  const { cart, precioFinal, emptyCart, removeCart } =
    useContext(ShoppingCartContext);

  const vaciar = () => {
    emptyCart();
  };

  return (
    <>
      <section className="section-cart bg">
        <div className="container">
          {cart.map((p) => (
            <div className="div-cart-product" key={p.id}>
              <div className="cart-product-info">
                <h3 className="cart-product-name">{p.name}</h3>
                <p>Precio por unidad: ${p.price}</p>
                <p>Cantidad: x{p.qty}</p>
                <p>Total: ${p.price * p.qty}</p>
              </div>
              <div>
                <img className="cart-img-info" src={p.image} alt={p.name} />
              </div>
              <div className="btn-eliminar-div">
                <button
                  className="btn-eliminar"
                  onClick={() => removeCart(p.id)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          ))}

          {cart.length > 0 ? (
            <>
              <div className="finale-cart">
                <h2 className="total-price">Precio total: ${precioFinal()}</h2>
                <div className="finale-cart-btns">
                  <button className="btn-vaciar" onClick={vaciar}>
                    Vaciar carrito
                  </button>
                  <button className="btn-finalizar">
                    <Link to="/checkout">Finalizar compra</Link>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to="/">
              <h1 className="h2-empty">
                <a className="a-empty" href="">
                  El carrito esta vacío
                </a>
              </h1>
            </Link>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Cart;
