import { useState } from "react";

const ItemCount = () => {
  // Funciones de suma y resta //
  const [numero, setNumero] = useState(0);
  const sumar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
    setNumero(numero - 1);
  };
  // //
  return (
    <div className="itemCount">
      <button className="btn-itemCount" onClick={restar}>
        Quitar
      </button>
      <h3>{numero}</h3>
      <button className="btn-itemCount" onClick={sumar}>
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
