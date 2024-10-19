import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ name, ingredients, price, img }) => {
  const ingredientsOrder = ingredients.join(", ");

  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt="..."></img>
      <div className="card-body p-0">
        <h5 className="card-title pt-3 ps-3">{name}</h5>
        <hr />
        <p className="card-text text-center mb-0">Ingredientes:</p>
        <p className="card-text text-center">🍕 {ingredientsOrder}</p>
        <hr />
        <h4 className="text-center pb-2">Precio: ${formatNumber(price)}</h4>
        <div className=" d-flex justify-content-around pb-4">
          <a href="#" className="btn btn-outline-dark">
            Ver más 👀
          </a>
          <a href="#" className="btn btn-dark">
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
