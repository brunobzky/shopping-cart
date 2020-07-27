//Ejecutar este archivo para alimentar la base de datos de productos

var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping')

var products = [
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-catehua.da7fca2c.jpg',
        title: 'Plaza Catehua, Monterrey',
        description: 'Network of wormholes stirred by starlight how far away kindling the energy hidden in matter vastness is bearable only through love tesseract.',
        price: 6650
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-allius.3495ed4e.jpg',
        title: 'Torre Allius - piso 5, Guadalajara',
        description: 'A still more glorious dawn awaits something incredible is waiting to be known inconspicuous motes of rock and gas hundreds of thousands are creatures of the cosmos bits of moving fluff.',
        price: 25900
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-wesley.5ca8bf07.jpg',
        title: 'The Wesley, Tijuana',
        description: 'Inconspicuous motes of rock and gas vanquish the impossible the carbon in our apple pies across the centuries muse about Drake Equation and billions upon billions.',
        price: 15900
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-encinos.f8ff9926.jpg',
        title: 'Encinos Comercio, Tlajomulco',
        description: 'Permanence of the stars not a sunrise but a galaxyrise take root and flourish quasar culture something incredible is waiting to be known.',
        price: 4325
    }),
    new Product({
        imagePath: 'https://www.100ladrillos.com/static/media/properties-sonata.5448260c.jpg',
        title: 'Sonata (Oficinas), Guadalajara',
        description: 'Hearts of the stars inconspicuous motes of rock and gas descended from astronomers globular star cluster tesseract.',
        price: 3400
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