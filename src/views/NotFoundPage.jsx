import { Link } from "react-router-dom";
import PizzaNotFound from "../assets/pizzanotfound.webp";

function NotFoundPage() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img
            src={PizzaNotFound}
            alt="imagen de no encontramos pizzas"
            className=" w-50 rounded mb-3"
          />
          <h1 className="display-4 text-danger">404</h1>
          <h2 className="mb-4">No encontramos tu Pizza</h2>
          <p className="lead mb-4">
            Lo sentimos, la página que buscas no existe o ha sido movida, revisa
            las pizzas disponibles.
          </p>
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
