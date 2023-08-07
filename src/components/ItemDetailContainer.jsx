import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      name: "Hamburguesa 1",
      price: "Precio 1",
      description: "Descripcion 1",
      image: "/images/ham1.jpg",
      category: "Hamburguesas",
    },
    {
      id: 2,
      name: "Hamburguesa 2",
      price: "Precio 2",
      description: "Descripcion 2",
      image: "/images/ham2.jpg",
      category: "Hamburguesas",
    },
    {
      id: 3,
      name: "Hamburguesa 3",
      price: "Precio 3",
      description: "Descripcion 3",
      image: "/images/ham3.jpg",
      category: "Hamburguesas",
    },
    {
      id: 4,
      name: "Hamburguesa 4",
      price: "Precio 4",
      description: "Descripcion 4",
      image: "/images/ham4.jpg",
      category: "Hamburguesas",
    },
    {
      id: 5,
      name: "Entrada 1",
      price: "Precio 5",
      description: "Descripcion 5",
      image: "/images/ent1.jpg",
      category: "Entradas",
    },
    {
      id: 6,
      name: "Entrada 2",
      price: "Precio 6",
      description: "Descripcion 6",
      image: "/images/ent2.jpg",
      category: "Entradas",
    },
    {
      id: 7,
      name: "Entrada 3",
      price: "Precio 7",
      description: "Descripcion 7",
      image: "/images/ent3.jpg",
      category: "Entradas",
    },
    {
      id: 8,
      name: "Bebida 1",
      price: "Precio 8",
      description: "Descripcion 8",
      image: "/images/beb1.jpg",
      category: "Bebidas",
    },
    {
      id: 9,
      name: "Bebida 2",
      price: "Precio 9",
      description: "Descripcion 9",
      image: "/images/beb2.jpg",
      category: "Bebidas",
    },
    {
      id: 10,
      name: "Bebida 3",
      price: "Precio 10",
      description: "Descripcion 10",
      image: "/images/beb3.jpg",
      category: "Bebidas",
    },
  ];

  const conseguirProductos = new Promise((res, rej) => {
    if (productos.lenght > 0) {
      setTimeout(() => {
        res(productos);
      }, 2500);
    } else {
      rej(new Error("No se han encontrado productos"));
    }
  });

  conseguirProductos
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (
    <>
      <ItemDetail productos={productos} />;
    </>
  );
};

export default ItemDetailContainer;
