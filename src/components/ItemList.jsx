import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="productos-display">
        {productos.map((p) => (
          <Item producto={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
