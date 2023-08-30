import { useState, useEffect } from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/data";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

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
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="bg">
            <ItemList productos={productos} />;
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ItemListContainer;
