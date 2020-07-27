module.exports = function Cart(oldCart) {//parametro con los ladrillos previamente agregados
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    //Agregar ladrillos al carrito
    this.add = function (item, id) {
        //Agrupar ladrillos
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    //reducir ladrillos de uno por uno
    this.reduceByOne = function (id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    //Remover todos los ladrillos de un inmueble
    this.removeItem = function (id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    //DESARROLLO
    //Remover todos los ladrillos del carrito
    this.removeAll = function () {
        this.items = {};
        this.totalQty = 0;
        this.totalPrice = 0;
    };

    //Añadir objetos a un arreglo
    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};