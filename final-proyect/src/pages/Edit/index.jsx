import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useParams, useHistory } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

=======

const Edit = ({ match }) => {
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
<<<<<<< HEAD
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
=======
  });

  const productID = match.params.id; // Obtiene el ID del producto de la URL

  useEffect(() => {
     fetch(`http://localhost:3003/products/detalle/${productID}`)
       .then(response => response.json())
       .then(data => setProduct(data))
       .catch(error => console.error('Error:', error));
  }, [productID]);

  const handleChange = (e) => {
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
      </div>
    </div>
  );
};

export default Edit;
