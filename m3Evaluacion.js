// Ejercicio 1 - Cálculo IVA

const product = {count: 3, price: 12.55, type:"ropa"};

function getVat (product.count, product.price, product.type) {
    if (product.count <= 0) {
        product.count = 0;
    } else {
        var totalPrice = product.count * product.price;
        console.log("Precio total del producto = ", totalPrice + " €");
    };


    let ivaAlimentacion = 0.1;
    let ivaLibros = 0.04;
    let ivaGeneral = 0.21;

    switch (product.type) {
        case product.type = "alimentacion":
            let totalProductoAlimentacion = (product.price * ivaAlimentacion) + product.price;
            console.log("Precio final del producto con el IVA para alimentación = ", totalProductoAlimentacion + " €")
            break;
        case product.type = "libros":
            let totalProductoLibros = (product.price * ivaLibros) + product.price;
            console.log("Precio final del producto con el IVA para libros = ", totalProductoLibros + " €")
            break;
        default:
            let totalProductoGeneral = (product.price * ivaGeneral) + product.price;
            console.log("Precio final del producto con el IVA General = ", totalProductoGeneral + " €")
            break;
    }
}

