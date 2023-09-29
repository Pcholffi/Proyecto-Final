/*-------------------------------------------------------productsRouters.js---------------------------------------------------------*/
const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');//es para cargar las imagenes
const router = express.Router();
const logs = require('../middlewares/loggs');
const upload = require('../middlewares/storage');
let controller = require('../controllers/ProductsControllers');




router.get('/buscar', logs, controller.buscar);//-accedo con query/products/buscar?nombre=cepillo
//const id = req.params.id;
router.get('/listar',logs, controller.listar);//-accedo con http://localhost:3003/products/listar
router.get('/detalle/:id', logs, controller.detalle);//-http://localhost:3003/products/detalle/
router.post('/crear', logs, upload.single('image'), controller.crear); //http://localhost:3003/products/crear debo tener todos lo campos namepricediscountcategorydescriptionimage
router.put('/update/:id', logs, controller.update);
router.delete('/eliminar/:id', logs, controller.eliminar);

module.exports = router;
