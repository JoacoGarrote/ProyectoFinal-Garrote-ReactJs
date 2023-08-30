import { useState, useEffect } from "react";
import Footer from "./Footer";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/data";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setProductos({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return (
    <>
      <div>{productos && <ItemDetail productos={productos} />}</div> <Footer />
    </>
  );
};

export default ItemDetailContainer;
