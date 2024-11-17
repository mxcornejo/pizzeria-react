import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formatNumber } from "../utils/formatNumber";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    pizzaCart.map((pizza) => ({
      ...pizza,
      quantity: 1,
    }))
  );

  const updateQuantity = (index, change) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const newQuantity = newItems[index].quantity + change;

      if (newQuantity <= 0) {
        return newItems.filter((_, i) => i !== index);
      } else {
        newItems[index] = { ...newItems[index], quantity: newQuantity };
        return newItems;
      }
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, pizza) => {
      return total + pizza.price * pizza.quantity;
    }, 0);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="my-5">Detalles del pedido:</h2>

            {cartItems.map((pizza, index) => (
              <>
                <div className="row mb-3" key={pizza.id}>
                  <div className="col">
                    <img
                      src={pizza.img}
                      className=" rounded-1 w-25"
                      alt={pizza.name}
                    />
                    <span className="ms-4">{pizza.name}</span>
                  </div>
                  <div className="col align-content-center text-end">
                    <div className="d-inline-flex gap-3">
                      <span className="mt-2 h5 text-black">
                        $ {formatNumber(pizza.price)}
                      </span>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                      <span className="mt-2">{pizza.quantity}</span>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="mt-5 h2">
              Total: ${formatNumber(calculateTotal())}
            </span>
          </div>
          <div className="col-md-12">
            <button className="btn btn-dark mt-3">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
