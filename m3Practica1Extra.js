// Ejercicio complementario extra

const booking1 = {
    count:3,
    price: 127.95
};

const booking2 = {
    count:5,
    price: 112.95
};

// Compara si las dos reservas son iguales
if (booking1.count === booking2.count) {
    console.log("Tienen el mismo número de días");
} else {
    console.log("No tienen el mismo número de días");
}

if (booking1.price === booking2.price) {
    console.log("Tienen el mismo precio");
} else {
    console.log("No tienen el mismo precio");
}

// Mostrar la suma del número de noches de las dos reservas

let suma = booking1.count + booking2.count;

console.log("Suma número de noches de las dos reservas = ", suma);

// Comparar dos reservas para mostrar la de mayor número de noches.

if (booking1.count > booking2.count) {
    console.log("Reserva 1 tiene más noches =", booking1.count);
} else {
    console.log("Reserva 2 tiene más noches =", booking2.count);
};

// Ampliar una noche más una reserva

let unaNocheMas = ++booking1.count;

console.log("Se ha añadido una noche más a la reserva 1 =", booking1.count)

// Calcular la diferencia de precio total entre dos reservas (Incluido descuentos)

let totalReserva1 = booking1.count * booking1.price;

let discountReserva1 = totalReserva1 > 500 ? totalReserva1 * 0.2 : 0;

if (totalReserva1 > 500 && discountReserva1 > 0) {
    var finalPrice1 = totalReserva1 - discountReserva1; 
}

let totalReserva2 = booking2.count * booking2.price;

let discountReserva2 = totalReserva2 > 500 ? totalReserva2 * 0.2 : 0;

if (totalReserva2 > 500 && discountReserva2 > 0) {
    var finalPrice2 = totalReserva2 - discountReserva2;
}

console.log("La diferencia entre las dos reservas es = ", finalPrice2 - finalPrice1 + "€" )

// Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos)

if (finalPrice2 > finalPrice1) {
    console.log("La reserva 2 tiene un precio mayor", finalPrice2 + " €")
} else {
    console.log("La reserva 1 tiene un precio mayor", finalPrice1 + " €")
}

// Mostrar número de reservas a las que se prodría aplicar descuento

// Revisar con Antonio el tema del switch (Hacerlo con un if else)


// Mostrar "Todas con descuento" si las dos reservas tienen descuentos



// Mostrar la suama del precio total con descuento de las dos reservas

console.log("El precio total de las dos reservas es = ", finalPrice1 + finalPrice2 + " €" );