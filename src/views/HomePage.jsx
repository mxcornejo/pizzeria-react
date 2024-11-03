import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { pizzas } from "../data/pizzas";

const HomePage = () => {
  const pizzaList = pizzas.map((pizza) => (
    <div className="col-md-4" key={pizza.id}>
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />
    </div>
  ));

  return (
    <>
      <Header />
      <div className="container">
        <div className="row py-5">{pizzaList}</div>
      </div>
    </>
  );
};

export default HomePage;
