import { usePizza } from "../context/PizzaContext";
import { formatNumber } from "../utils/formatNumber";

const PizzaPage = ({ pizzaId }) => {
  const { pizzas, loading, error } = usePizza();

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
    return <p>Error al cargar la pizza: {error.message}</p>;
  }

  const pizza = pizzas.find((p) => p.id === pizzaId);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} className="img-fluid rounded" alt={pizza.name} />
        </div>
        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <h3>$ {formatNumber(pizza.price)}</h3>
          <p>{pizza.desc}</p>
          <h5>Ingredientes</h5>
          <ul className="card-text list-inline">
            🍕
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="list-inline-item">
                {ingredient}
                {index < pizza.ingredients.length - 1 && ","}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-dark">
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
