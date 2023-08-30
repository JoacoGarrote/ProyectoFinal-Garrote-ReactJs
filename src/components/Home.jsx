import ItemListContainer from "./ItemListContainer";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="h1-gral">¡Bienvenido a Kousyn!</h1>
      </div>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
};

export default Home;
