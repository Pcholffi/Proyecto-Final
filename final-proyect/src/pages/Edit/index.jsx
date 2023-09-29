import React, { useState, useEffect } from 'react';

const Edit = ({ match }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const productID = match.params.id; // Obtiene el ID del producto de la URL

  useEffect(() => {
     fetch(`http://localhost:3003/products/detalle/${productID}`)
       .then(response => response.json())
       .then(data => setProduct(data))
       .catch(error => console.error('Error:', error));
  }, [productID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3003/products/update/${productID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(data => {
      //tengo que colocar swal para mostrar el msj
      console.log('Producto actualizado:', data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            Estás editando: <i>{product.name}</i>
          </h2>
        </div>
      </div>
      <div className="col-12">
        <form action={`/products/edit/${productID}`} method="PUT" onSubmit={handleSubmit}>
          <div className="row product-detail">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre del producto:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Zapatillas Reebok"
                className="form-input"
                value={product.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="price" className="form-label">
                Precio del producto:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Ej: 5678"
                className="form-input"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Descripción:
              </label>
              <textarea
                name="description"
                id="description"
                className="form-input"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="buy-now-button">
                Guardar producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
