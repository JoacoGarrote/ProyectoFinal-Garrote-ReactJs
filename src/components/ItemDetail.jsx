import { useState, useEffect, useContext } from "react";
import Loader from "./Loader";
import ItemCount from "./ItemCount";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const ItemDetail = ({ productos }) => {
  const { cart, addToCart } = useContext(ShoppingCartContext);
  console.log(cart);

  const [qty, setQty] = useState(1);

  const sumar = () => {
    setQty(qty + 1);
  };
  const restar = () => {
    qty > 1 && setQty(qty - 1);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div key={productos.id} className="container">
            <div className="producto-detail">
              <img
                className="image-detail"
                src={productos.image}
                alt={productos.name}
              />
              <div className="info-detail">
                <h3 className="name-detail">{productos.name}</h3>
                <p className="description-detail">{productos.description}</p>
                <p className="price-detail">${productos.price}</p>
              </div>
              <div className="btn-add-div">
                <button
                  className="btn-add"
                  onClick={() => {
                    addToCart(productos, qty);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
              <div className="item-count-detail">
                <ItemCount qty={qty} sumar={sumar} restar={restar} />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <h1 className="h1-gral">Detalle del producto:</h1> */}
    </>
  );
};

export default ItemDetail;
