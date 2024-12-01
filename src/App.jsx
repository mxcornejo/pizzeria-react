import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import PizzaPage from "./views/PizzaPage";
import RegisterPage from "./views/RegisterPage";
import NotFoundPage from "./views/NotFoundPage";
import CartPage from "./views/CartPage";
import ProfilePage from "./views/ ProfilePage";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";

function App() {
  return (
    <div className="home">
      <Router>
        <CartProvider>
          <PizzaProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/pizza/p001" element={<PizzaPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </PizzaProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
