var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping')

var products = [
    new Product
    ({
    imagePath: 'qwqw',
    title: 'Plaza Catehua, Monterrey',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 6650
}),
new Product
({
    imagePath: 'qwewe',
    title: 'Torre Allius - piso 5, Guadalajara',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 6650
}),
new Product
({
    imagePath: 'wqdqw',
    title: 'Sonata (Oficinas), Guadalajara',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 6650
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if(done ===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
