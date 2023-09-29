import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; // Importar el componente Carousel de react-bootstrap
import './assets/css/Cont.css'

const Contenido = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <h3 className="titulo">Lo que hacemos</h3>
          <p className="texto">
            En GeekZone nos dedicamos a la serie de tareas y procedimientos que comprende la reparación de
            computadoras, la cual consiste en la inspección de anomalías, limpieza y sustitución de piezas,
            materiales y sistemas usados, que ayuden a evitar fallos en el equipo de cómputo y garantizar que se
            encuentran funcionando de acuerdo a sus capacidades.
          </p>
          <p className="texto">También tenemos las herramientas y los conocimientos para que puedas empezar por tu cuenta.</p>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400/?random=103"
            alt="Primera imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400/?random=102"
            alt="Segunda imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400/?random=101"
            alt="Tercera imagen"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Contenido;
