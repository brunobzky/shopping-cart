var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping')

var products = [
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-catehua.da7fca2c.jpg',
        title: 'Plaza Catehua, Monterrey',
        description: 'ld on the card title and make up the bulk of the cards content.',
        price: 6650
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-allius.3495ed4e.jpg',
        title: 'Torre Allius - piso 5, Guadalajara',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 6650
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-wesley.5ca8bf07.jpg',
        title: 'Sonata (Oficinas), Guadalajara',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 6650
    }), new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-encinos.f8ff9926.jpg',
        title: 'Plaza Catehua, Monterrey',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 6650
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-sonata.5448260c.jpg',
        title: 'Torre Allius - piso 5, Guadalajara',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        price: 6650
    })
];


//Almacenar todos los productos en la base de datos de mongoDB 
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}