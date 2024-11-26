
let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - Rp${item.price}</p>`).join('');
    totalPrice.textContent = cart.reduce((total, item) => total + item.price, 0);
}
function checkout() {
    alert('Terima kasih telah berbelanja!');
    cart = [];
    displayCart();
}
