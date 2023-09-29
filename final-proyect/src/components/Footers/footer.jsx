import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="colores">
        <nav className="d-flex justify-content-center">
          <a href="https://www.facebook.com/GeekZonesoluciones/" target="_blank" className="mx-2">
            <img src="../Img/face.png" alt="Facebook" className="img-fluid size1" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" className="mx-2">
            <img src="../Img/twi.png" alt="Twitter" className="img-fluid size1" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="mx-2">
            <img src="../Img/insta.png" alt="Instagram" className="img-fluid size1" />
          </a>
          <a href="mailto:cholffi@gmail.com" className="mx-2">
            <img src="../Img/correo.png" alt="Correo" className="img-fluid size" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=1111&text=Hola%20,Contanos%20que%20por%20whatsapp%20En%20que%20te%20ayudamos%20." target="_blank" className="mx-2">
            <img src="../Img/wat.png" alt="WhatsApp" className="img-fluid size" />
          </a>
          <a href="Tel:11-123456789" className="mx-2">
            <img src="../Img/tele.png" alt="Teléfono" className="img-fluid size" />
          </a>
        </nav>
      </div>
      <div className="text-center">
        <a href="#home">
          <img src="../Img/nube.png" alt="Arriba" className="img-fluid size" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
