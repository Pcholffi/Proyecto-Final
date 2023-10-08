import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
=======
import { useParams } from "react-router-dom";

>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

<<<<<<< HEAD
  const history = useHistory();

=======
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
  const getProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/products/detalle/${id}`)

      if (!response.ok) {
        throw new Error(`Como asi (verificar: ${response.status})`)
      }

      const product = await response.json()
<<<<<<< HEAD
      
      if (product.image === '') {
        product.image = 'imgDefault.jpg';
      }

=======
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
      setProduct(product)
    } catch (error) {
      console.error("Error al obtener el producto:", error.message)
    }
<<<<<<< HEAD
  };


  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3003/products/eliminar/${id}`,
        {
          method: "DELETE",
        });

      if (!response.ok) {
        throw new Error(`Error al eliminar el producto (verificar: ${response.status})`);
      }

      // Si la eliminación fue exitosa, vamos a main
      history.push('/');
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
    }
  };


=======
  }
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005

  useEffect(() => {
    getProduct(id)
  }, [id])

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <div className="main_image">
            <img
              src={`http://localhost:3003/images/${product.image}`}
              className="img-fluid"
              alt="product"
            />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <h3>{product.name}</h3>
          <h4>
            <small>$</small>
            {product.price}{" "}
          </h4>
          <p className="descripcion">{product.description}</p>
          <h5>Pertenece a la categoria: {product.category}</h5>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-lg-8">
<<<<<<< HEAD
          {/*aca tengo que colocar el puntaje que tiene la herrameinta*/}
=======
{/*aca tengo que colocar el puntaje que tiene la herrameinta*/}
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
          <p className="mt-3">{product.category} Pasa solucines rapidas</p>
        </div>
        <div className="col-12 col-lg-4">
          <article>
            <h2>{product.name}</h2>
            <p className="small">
              <span>${product.price}</span> / <b>{product.discount}% Descuento</b>
            </p>
            <p>Con el Descuento te queda en ${product.price - (product.price * (product.discount / 100))} Pagando por transferencia</p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <i className="fas fa-credit-card mr-2" />
                <p>Pago en Efectivo en el local tiene descuento aparte</p>
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-store mr-2" />
                <p>Recibimos todas la tarjetas</p>
              </li>
            </ul>
            <a href="/" className="btn btn-primary btn-block mb-3">
              COMPRAR AHORA
            </a>
            <hr />
<<<<<<< HEAD
            <Link to={`/editar/${id}`}
              className="btn btn-secondary btn-block mb-3"
            >
              EDITAR 
            </Link>
            <hr />
            <form onSubmit={handleDelete} style={{ display: "inline-flex" }}>
=======
            <a
              href={`http://localhost:3003/products/update/${product.id}`}
              className="btn btn-secondary btn-block mb-3"
            >
              EDITAR PRODUCTO
            </a>
            <form
              action={`/products/delete/${product._id}`}
              method="POST"
              style={{ display: "inline-flex" }}
            >
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
              <button type="submit" className="btn btn-danger btn-block">
                ELIMINAR
              </button>
            </form>
          </article>
        </div>
      </div>
<<<<<<< HEAD
 
=======
      {/*<div className="row">
        <div className="col-md-6">
          <h5>Number</h5>
          <div className="d-flex">
            <button className="btn btn-secondary">-</button>
            <label className="mx-2">1</label>
            <button className="btn btn-secondary">+</button>
          </div>
        </div>
  </div>*/}
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
    </div>

  );
}

export default Detail
