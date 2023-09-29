import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const word = query.get('word');

  const getProducts = () => {
    fetch('http://localhost:3003/products/listar') // aca tengo que ver que es lo que no trae por la url de la api
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getProducts(); // Agregué los paréntesis faltantes al usar getProducts
  }, []); 

  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Resultados de la búsqueda: {word}</h2> {/*aca deberia ver el texto o la palabra que use para la busqueda */}
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <section className="product-box">
            <a href="/products/detail/id">
              <figure className="product-box_image">
                <img
                  src="./images/products/default-image.png"
                  alt="imagen de producto"
                />
              </figure>
              <article className="product-box_data">
                <h2>$FINAL PRICE</h2>
                <span>DISCOUNT% OFF</span>
                <p>PRODUCT NAME</p>
                <i className="fas fa-truck" />
              </article>
            </a>
          </section>
        </div>
        <div className="col-12">
          <h2 className="products-title" style={{ color: "tomato" }}>
            No hay productos que coincidan con esa búsqueda
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Results;
