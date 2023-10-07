//import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="container bg-primary text-whiter">
      <div className="bsod">
        <h1 className="title"><span className="bg">Error - 404</span></h1>
        <p>Se ha producido un error, para continuar:</p>
        <p>
          * Regresar a nuestra página de inicio.<br />
          * Envíanos un correo electrónico sobre este error e inténtalo más tarde.
        </p>
        <nav className="nav">
          <a href="https://www.facebook.com/GeekZonesoluciones/" className="text-white">Consultas</a>
          <li><Link to="/empresa" className="text-white">Home</Link></li>
        </nav>
      </div>
    </main>
  );
};

export default NotFound;
