import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto-card">
      <img src={producto.image} alt={producto.name} />
      <div>
        <h4 className="producto-card-name">{producto.name}</h4>
        <p className="producto-card-price">Precio: ${producto.price}</p>
        <Link className="ver-mas-detalles" to={`/item/${producto.id}`}>
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
