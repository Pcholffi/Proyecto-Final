import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardProduct = ({ product, cart, setCart }) => {
  const button = useRef();
<<<<<<< HEAD
  if (product.image === ''){
    product.image = 'imgDefault.jpg'
  }

  const imageUrl = `http://localhost:3003/images/${product.image}`;
  //src={`http://localhost:3003/images/${product.image}`}
=======
  const imageUrl = `http://localhost:3003/images/${product.image}`;

>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
  const addToCart = () => {
    const carNew = [
      ...cart,
      product.id
    ];
    setCart(carNew);
  };

  return (
    <div className="card h-100">
      <Link to={`/detail/${product._id}`} className="text-decoration-none">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="imagen de producto"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">${product.price}</h5>
        <p className="card-text">%{product.discount} Descuento</p>
        <p className="card-text">{product.name}</p>
        <i className="fas fa-truck" />
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <button
          id={product.id}
          onClick={addToCart}
          className="btn btn-primary"
          ref={button}
        >
<<<<<<< HEAD
          Agregar
=======
          A la Bolsa
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
        </button>
        <Link to={`/detail/${product._id}`} className="btn btn-secondary">
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
