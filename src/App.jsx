import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import PizzaPage from "./views/PizzaPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div className="home">
      <Navbar />
      {/* <HomePage /> */}
      <PizzaPage />
      {/* <div className="bg-form">
        <RegisterPage />
        <LoginPage />
      </div> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
