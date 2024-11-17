function ProfilePage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4 className="text-center mb-0">Perfil de usuario</h4>
            </div>
            <div className="card-body text-center">
              <p className="lead">
                Email: <strong>usuario@example.com</strong>
              </p>
              <button
                className="btn btn-dark mt-3"
                onClick={() => alert("Cerrar sesión")}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
