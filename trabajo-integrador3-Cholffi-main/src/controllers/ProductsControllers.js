/*-------------------------------------------------------productsControllers.js---------------------------------------------------------*/
const path = require('path');
const fs = require('fs');
const Product = require('../database/models/Product'); // Asegúrate de importar el modelo Product o el modelo adecuado
const { Error } = require('mongoose');

//const ruta = path.resolve(__dirname, '../data/products.json');
//const jsonProducts = fs.readFileSync(ruta, { encoding: 'utf-8' });
//let products = JSON.parse(jsonProducts);

const controller = {
  listar: async (req, res) => {
    try {
      const products = await Product.find({}); // Utiliza el modelo para obtener productos desde la base de datos
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  detalle: async (req, res) => {
    const productId = req.params.id;
<<<<<<< HEAD
    const product = await Product.findById({ _id: productId });
=======
    const product = await Product.findById({_id : productId});
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado.' });
    }
    res.json(product);
  },
  crear: async (req, res) => {
    try {
      let product = {
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        description: req.body.description,
<<<<<<< HEAD
        image: req.file ? req.file.filename : '',

=======
        image: req.file? req.file.filename : '',
    
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
      };

      const productDatabase = await Product.create(product); // Utiliza el modelo para crear un nuevo producto en la base de datos
      res.status(201).json(productDatabase);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  update: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.description = req.body.description || product.description;
        product.image = req.body.image || product.image;
        await product.save();
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

<<<<<<< HEAD
  eliminar: async (req, res) => {
    try {
        const productId = req.params.id;

        // Busca y elimina el producto de la base de datos
        const productEliminado = await Product.findByIdAndDelete(productId);

        if (!productEliminado) {
            return res.status(404).json({ msg: 'Producto no encontrado. Verifique el Id Ingresado' });
        }

        return res.json({ msg: `Producto con ID ${productId} eliminado exitosamente.`, producto: productEliminado });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
},


  buscar: async (req, res) => {
    console.log(req.query)
    if (!req.query.name) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    const product = await Product.find({ "name": { $regex: req.query.name, $options: "i" } });
    res.json(product);
  }
=======
  eliminar: (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((producto) => producto.id === productId);
    if (productIndex === -1) {
      return res.status(404).json({ msg: 'Producto no encontrado. Verifique el Id Ingresado' });
    }

    const productoEliminado = products.splice(productIndex, 1);
    let productsJson = JSON.stringify(products, null, 4);
    fs.writeFileSync(ruta, productsJson, { encoding: 'utf-8' });
    const response = { msg: `Producto con ID ${productId} eliminado exitosamente.`, producto: productoEliminado[0] };
    res.json(response);
  },
  
  buscar: async (req, res) => {

    if(!req.query.name) {
        return res.status(404).json({ message: "Producto no encontrado"}) ;
    }
        const product = await Product.find({ "name": { $regex: req.query.name, $options: "i" } });
        res.json(product);
    }
>>>>>>> 12dada15162aa758f13d4c81bf6e646fc8567005
}

module.exports = controller;
