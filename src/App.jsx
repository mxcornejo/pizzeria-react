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
import ProfilePage from "./views/ProfilePage";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider } from "./context/UserContext";
import { AuthRoute } from "./components/AuthRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="home">
      <Router>
        <UserProvider>
          <CartProvider>
            <PizzaProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <AuthRoute>
                      <RegisterPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <AuthRoute>
                      <LoginPage />
                    </AuthRoute>
                  }
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/pizza/:pizzaId" element={<PizzaPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </PizzaProvider>
          </CartProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
