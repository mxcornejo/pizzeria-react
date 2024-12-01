import { usePizza } from "../context/PizzaContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const HomePage = () => {
  const { pizzas, loading, error } = usePizza();

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error al cargar las pizzas: {error.message}</p>;
  }

  const pizzaList = pizzas.map((pizza) => (
    <div className="col-md-4" key={pizza.id}>
      <CardPizza
        id={pizza.id}
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
