import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

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
