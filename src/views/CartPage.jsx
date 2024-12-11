import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatNumber } from "../utils/formatNumber";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000";

const CartPage = () => {
  const { cart, updateQuantity, calculateTotal, removeFromCart } = useCart();
  const { token } = useUser();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!token) {
      Swal.fire(
        "¡Necesitas iniciar sesión!",
        "Inicia sesión para realizar la compra.",
        "warning"
      );
      return;
    }

    try {
      // Envio de carrito al backend
      const checkoutData = {
        items: cart.map((pizza) => ({
          id: pizza.id,
          name: pizza.name,
          quantity: pizza.quantity,
          price: pizza.price,
        })),
        total: calculateTotal(),
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/checkouts`,
        checkoutData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsSuccess(true);
        Swal.fire(
          "Compra realizada",
          "Compra exitosa. ¡Gracias por tu compra!",
          "success"
        );
      } else {
        Swal.fire(
          "Error",
          "Hubo un problema al procesar tu compra. Intenta nuevamente.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "Hubo un problema de conexión. Intenta nuevamente.",
        "error"
      );
    }
  };

  const handleGoToShop = () => {
    if (cart.length === 0) {
      // Redirigir usando navigate cuando el carrito está vacío
      navigate("/");
    }
  };

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
                <button className="btn btn-dark mt-3" onClick={handleGoToShop}>
                  Ir a comprar
                </button>
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
              <button
                className="btn btn-dark mt-3"
                onClick={handleCheckout}
                disabled={isSuccess}
              >
                {isSuccess ? "Compra realizada" : "Pagar"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
