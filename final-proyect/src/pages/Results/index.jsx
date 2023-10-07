import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/ProductsList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const word = query.get("name");

  const getProducts = () => {
    fetch(`http://localhost:3003/products/buscar?name=${word}`) // aca tengo que ver que es lo que no trae por la url de la api
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch((error) => console.log(error))
  }

  useEffect(getProducts, [word]);
console.log(products, "hola")
  return (
    <>

    {
        products.length > 0 ?
      <ProductList
        title={`Estos son lo resultados de tu busqueda: ${word}`}
        products={products}
        cart={[]}
      />
      :
      <div className="col-12">
        <h2 className="products-title" style={{ color: "tomato" }}>
          No hay productos que coincidan con esa búsqueda
        </h2>
      </div>

      }
    </>
  );
};

export default Results;
