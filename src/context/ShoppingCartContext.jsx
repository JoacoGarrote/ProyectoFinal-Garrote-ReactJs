import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const initCart = JSON.parse(localStorage.getItem("carrito")) || [];

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(initCart);

  const addToCart = (p, qty) => {
    const addItem = { ...p, qty };
    const newCart = [...cart];
    const inCart = newCart.find((producto) => producto.id === addItem.id);

    if (inCart) {
      inCart.qty += qty;
    } else {
      newCart.push(addItem);
    }
    setCart(newCart);
  };

  const qtyCart = () => {
    return cart.reduce((acc, p) => acc + p.qty, 0);
  };
  const precioFinal = () => {
    return cart.reduce((acc, p) => acc + p.price * p.qty, 0);
  };
  const removeCart = (productId) => {
    const newCart = cart.filter((producto) => producto.id !== productId);
    setCart(newCart);
  };
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        qtyCart,
        precioFinal,
        emptyCart,
        removeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
