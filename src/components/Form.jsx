import { useState } from "react";
import Swal from "sweetalert2";
import { useUser } from "../context/UserContext";

const Form = ({ registeredUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { login, register } = useUser();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // campos vacíos
    if (
      !formData.email ||
      !formData.password ||
      (!registeredUser && !formData.confirmPassword)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    // longitud contraseña
    if (formData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }

    // contraseña y confirmación
    if (!registeredUser && formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
      return;
    }

    try {
      if (registeredUser) {
        // Llamada al login
        await login({ email: formData.email, password: formData.password });
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de sesión exitoso",
        });
      } else {
        // Llamada al registro
        await register({ email: formData.email, password: formData.password });
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Registro exitoso",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema con el proceso. Inténtalo de nuevo.",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                {registeredUser ? "Iniciar Sesión" : "Registro"}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {!registeredUser && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirmar Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirma tu contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="text-center">
                  <button type="submit" className="btn btn-lg btn-dark px-5">
                    {registeredUser ? "Iniciar Sesión" : "Registrarse"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
