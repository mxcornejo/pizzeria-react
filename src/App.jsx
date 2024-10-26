import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div className="home">
      <Navbar />
      {/* <HomePage /> */}
      <div className="bg-form">
        <RegisterPage />
        {/* <LoginPage /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
