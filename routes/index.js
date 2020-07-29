var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Product = require('../models/product');
//const { route } = require('./user');


/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Shopping Cart',
      products: productChunks
    });
  });
});

//Agregar al carrito
router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});//valida sí se tiene almacenado un carrito en la sesión, sino, crea uno nuevo

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);//función para añadir al carrito, ubicada en "models/cart.js"
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

//reducir uno del carrito
router.get('/reduce/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});


//remover producto del carrito
router.get('/remove/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

//DESARROLLO
//vaciar carrito de compras
router.get('/remove-all'), function (req, res, next) {
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeAll();
  req.session.cart = cart;
  res.redirect('/shopping-cart');
}

//carrito de compras
router.get('/shopping-cart', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});


//Verificación de datos
router.get('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/checkout', { total: cart.totalPrice })
});


module.exports = router;