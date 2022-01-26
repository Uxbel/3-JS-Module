// Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto, alimentación 10% y libros 4%. 

const product = {
    count:3,
    price: 12.55,
    type: "ropa"
}

// Calcular el precio total

if (product.count <= 0) {
    product.count = 0;
} else {
    var totalPrice = product.count * product.price;
    console.log("Precio total del producto = ", totalPrice + " €");
};

// Calcular el IVA - Por unidad aplicable

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

// Extra 1: Calcular sueldo neto en nómina, simulación de cálculo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

let ret1 = 1; // Retención del 0% para sueldos de menos de 12000 €/brutos año
let ret2 = 0.08; // Retención del 8% para menos de 24000 €/brutos año
let ret3 = 0.16; // Retención del 16% para menos de 34000 €/brutos año
let ret4 = 0.3; // Retención del 30% para más de 34000 €/brutos año

let descuentoRetHijos = 0.02

if (empleado.hijos > 0) {
    ret2 = ret2 - descuentoRetHijos, 
    ret3 = ret3 - descuentoRetHijos, 
    ret4 = ret4 - descuentoRetHijos;
};

if (empleado.bruto > 0 && empleado.bruto < 12000){
    let salarioRet1 = (empleado.bruto * ret1)/empleado.pagas;
    console.log("El empleado tiene una retención del 0%, con unos ingresos netos de ", salarioRet1 + " € netos mensuales")
} else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
    let salarioRet2 = (empleado.bruto - (empleado.bruto * ret2))/empleado.pagas;
    console.log("El empleado tiene una retención del 8%, con unos ingresos netos de ", salarioRet2 + " € netos mensuales")
} else if (empleado.bruto >= 24000 && empleado.bruto <= 34000) {
    let salarioRet3 = (empleado.bruto - (empleado.bruto * ret3))/empleado.pagas;
    console.log("El empleado tiene una retención del 16%, con unos ingresos netos de ", salarioRet3 + " € netos mensuales")
} else {
    let salarioRet4 = (empleado.bruto - (empleado.bruto * ret4))/empleado.pagas;
    console.log("El empleado tiene una retención del 30%, con unos ingresos netos de ", salarioRet4 + " € netos mensuales")
}

