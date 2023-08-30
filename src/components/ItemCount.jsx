const ItemCount = ({ qty, restar, sumar }) => {
  return (
    <>
      <div className="container item-count-container">
        <div className="item-count">
          <button className="btn-itemCount btn-menos" onClick={restar}>
            -
          </button>
          <h3 className="qty-number">{qty}</h3>
          <button className="btn-itemCount btn-mas" onClick={sumar}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
