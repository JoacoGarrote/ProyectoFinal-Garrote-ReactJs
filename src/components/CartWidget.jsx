import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { qtyCart } = useContext(ShoppingCartContext);
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <div className="cw-img">
          <img src="/images/shopping-cart.png" alt="Carrito de compras" />
        </div>
        <div className="cw-number">
          <span>{qtyCart()}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
