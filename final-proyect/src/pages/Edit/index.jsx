import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    //discount: '',
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3003/products/detalle/${id}`);

        if (!response.ok) {
          throw new Error(`Error al obtener el producto (verificar: ${response.status})`);
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error al obtener el producto:', error.message);
      }
    };

    getProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3003/products/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el producto (verificar: ${response.status})`);
      }

      // Si la actualización fue exitosa, redirigimos al detalle del producto
      history.push(`/detail/${id}`);
    } catch (error) {
      console.error('Error al actualizar el producto:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Precio:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripción:</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="description"
                value={product.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Imagen:</label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={product.image}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
