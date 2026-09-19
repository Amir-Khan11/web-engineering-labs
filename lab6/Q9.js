function calculateCartTotal(cart) {
    let totalPrice = 0;
    
    for (let val of cart) {
        totalPrice += val.price * val.quantity;
    }

    return totalPrice;
}

const cart = [
    {name: "Mouse", price: 1200, quantity: 2},
    {name: "Keyboard" , price: 2500, quantity: 1}
];


console.log(calculateCartTotal(cart));