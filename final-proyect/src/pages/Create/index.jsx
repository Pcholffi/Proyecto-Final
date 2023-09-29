import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';

const Crear = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    discount: '',
    category: '',
    description: '',
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los datos del formulario
    if (!product.name || !product.price || !product.image) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'El nombre, precio e imagen del producto son obligatorios.',
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('discount', product.discount);
      formData.append('category', product.category);
      formData.append('description', product.description);
      formData.append('image', product.image);

      const response = await fetch('http://localhost:3003/products/crear', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Producto Creado!',
          text: 'Claro que yes, el producto fue ingresado.',
        });
        setProduct({
          name: '',
          price: '',
          discount: '',
          category: '',
          description: '',
          image: null,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: data.message || 'Como asi, No pudimos ingresar el producto.',
        });
      }
    } catch (error) {
      console.error('Error al enviar el producto:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
        <div className="mb-3 text-center p-4 bg-gradient-success rounded">
          <h1 className="text-black">Creacion de Productos</h1> {/* Título centrado y estilizado */}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="hasDiscount"
            checked={product.hasDiscount}
            onChange={(e) => setProduct({ ...product, hasDiscount: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="Discount">Tiene Descuento</label>
        </div>
        {product.hasDiscount && (
          <div className="mb-3">
            <label htmlFor="discount" className="form-label">Descuento (%):</label>
            <input
              type="text"
              className="form-control"
              id="discount"
              value={product.discount}
              onChange={(e) => setProduct({ ...product, discount: e.target.value })}
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Categoría:</label>
          <select
            className="form-select"
            id="category"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          >
            <option value="" disabled>Seleccione una categoría</option>
            <option value="herramientas">Herramientas</option>
            <option value="accesorios-celular">Accecsorios de Celular</option>
            <option value="coleccionables">Coleccionables</option>
            <option value="accesorios-pc">Accesorios de Pc</option>
            <option value="herramientas-pc">Herramientas de PC</option>
            <option value="herramientas-celular">Herramientas de Celular</option>
            <option value="perifericos">Perifericos</option>
            <option value="bolucompra">Bolucompras</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagen:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Producto</button>
        </form>
        </div>
      </div>
    </div>
  );
};


export default Crear;
