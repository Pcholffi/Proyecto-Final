import React from 'react';
import logo from './assets/img/gk.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar el CSS de Bootstrap
import { Link } from 'react-router-dom';
import SearchForm from './assets/SearchForm';

const Header = () => {
  return (
    <header className="bg-dark p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="inicio" style={{ maxHeight: '50px' }} />
            </Link>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/empresa">Empresa</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/registro">Registro</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Mi Cuenta</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/carrito">Mi Carrito</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Productos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crear">Crear</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/editar">Editar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div >
           <SearchForm/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
