import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatNumber } from "../utils/formatNumber";

const CartPage = () => {
  const { cart, updateQuantity, calculateTotal, removeFromCart } = useCart();
  const { token } = useUser();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="my-5">Detalles del pedido:</h2>

            {cart.length === 0 ? (
              // Mensaje cuando el carrito está vacío
              <div className="text-center my-5">
                <h4>No hay pizzas, ¿qué esperas para comerte una? 🍕</h4>
                <a href="/" className="btn btn-dark mt-3">
                  Ir a comprar
                </a>
              </div>
            ) : (
              // Contenido del carrito
              cart.map((pizza) => (
                <div key={pizza.id}>
                  <div className="row mb-3 align-items-center">
                    <div className="col d-flex align-items-center">
                      <img
                        src={pizza.img}
                        className="rounded-1 w-25"
                        alt={pizza.name}
                      />
                      <span className="ms-4">{pizza.name}</span>
                    </div>
                    <div className="col text-end">
                      <div className="d-inline-flex gap-3 align-items-center">
                        <span className="mt-2 h5 text-black">
                          $ {formatNumber(pizza.price)}
                        </span>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => updateQuantity(pizza.id, -1)}
                        >
                          -
                        </button>
                        <span className="mt-2">{pizza.quantity}</span>
                        <button
                          className="btn btn-dark"
                          onClick={() => updateQuantity(pizza.id, 1)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => removeFromCart(pizza.id)}
                        >
                          🗑 Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <span className="mt-5 h2">
                Total: ${formatNumber(calculateTotal())}
              </span>
            </div>
            <div className="col-md-12">
              <button className="btn btn-dark mt-3" disabled={!token}>
                {token ? "Pagar" : "Inicia sesión para pagar"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
