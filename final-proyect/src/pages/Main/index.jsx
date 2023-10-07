import ProductList from "../../components/ProductsList";
import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    fetch('http://localhost:3003/products/listar')
        .then(res => res.json())
        .then(products => {
          //console.log(products);
            setProducts(products);
            
        })
  }

  useEffect(getProducts, []);

  useEffect(() => {
    console.log('El componente se actualizó');
  }, [products])

  return (
    <>

      {/* ultima visita */}
      <ProductList 
        title="Basados en tu ultima visita" 
        cart={cart} 
        setCart={setCart} 
        products={products} 
      />

      
    </>
  );
};

export default Main;
