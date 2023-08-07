import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filtrandoProductos = productos.filter((producto) => producto.id == id);

  return (
    <>
      <h1 className="h1-gral">Detalle del producto:</h1>
      {filtrandoProductos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            description={p.description}
          />
        );
      })}
    </>
  );
};

export default ItemDetail;
