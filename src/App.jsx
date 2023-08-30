import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import TakeAway from "./components/TakeAway";
import Checkout from "./components/Checkout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/sobrenosotros" element={<AboutUs />} />
              <Route path="/takeaway" element={<TakeAway />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      )}
    </div>
  );
};

export default App;
