import { useCart } from "../context/CartContext";
import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ id, name, ingredients, price, img }) => {
  const { addToCart } = useCart();
  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt={name}></img>
      <div className="card-body p-0">
        <h5 className="card-title pt-3 ps-3">{name}</h5>
        <hr />
        <p className="card-text text-center mb-0">Ingredientes:</p>
        <ul className="card-text text-center list-inline">
          🍕
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-inline-item">
              {ingredient}
              {index < ingredients.length - 1 && ","}
            </li>
          ))}
        </ul>
        <hr />
        <h4 className="text-center pb-2">Precio: ${formatNumber(price)}</h4>
        <div className="d-flex justify-content-around pb-4">
          <a href="#" className="btn btn-outline-dark">
            Ver más 👀
          </a>
          <button
            className="btn btn-dark"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
