import { usePizza } from "../context/PizzaContext";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { useCart } from "../context/CartContext";

const PizzaPage = () => {
  const { addToCart } = useCart();
  const { pizzas, loading, error } = usePizza();
  const { pizzaId } = useParams();

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
          <button
            className="btn btn-dark"
            onClick={() =>
              addToCart({
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                img: pizza.img,
              })
            }
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
