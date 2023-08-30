import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/data";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const category = useParams().category;

  useEffect(() => {
    const productosFirestore = collection(db, "productos");
    const q = category
      ? query(productosFirestore, where("category", "==", category))
      : productosFirestore;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <>
      <ItemList productos={productos} />;
    </>
  );
};

export default ItemListContainer;
