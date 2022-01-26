// Enunciado: A partir de una reserva de habitación con el número de noches y el precio por noches, calcular el precio total y aplicar un descuento del 20% si este supera los 500€.

const booking = {
    count:5,
    price: 127.95
};

let total = booking.count * booking.price;

let discount = total > 500 ? total * 0.2 : 0;

console.log("Total =", total + " €")

if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento del 20%", discounted + " €")
}