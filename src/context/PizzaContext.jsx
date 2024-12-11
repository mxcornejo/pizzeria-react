import { createContext, useContext, useState, useEffect } from "react";

const PizzaContext = createContext();

export const usePizza = () => {
  return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
  const endPoint = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDetail, setPizzaDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(endPoint);
        if (!response.ok) {
          throw new Error("Error fetching pizzas");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const fetchPizzaById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${endPoint}/${id}`);
      if (!response.ok) {
        throw new Error("Error fetching pizzas id");
      }
      const data = await response.json();
      setPizzaDetail(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        pizzaDetail,
        fetchPizzaById,
        loading,
        error,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
