const cart = [];

const cartItemName = document.getElementById('cart-item-name');
const cartItemPrice = document.getElementById('cart-item-price');

cart.forEach(item => {
    const itemElement = document.createElement('div');
    const nameElement = document.createElement('span');
    const priceElement = document.createElement('span');

    nameElement.textContent = item.name;
    priceElement.textContent = item.price.toFixed(2);

    itemElement.appendChild(nameElement);
    itemElement.appendChild(document.createTextNode(' - $'));
    itemElement.appendChild(priceElement);
    itemElement.appendChild(document.createElement('br'));

    cartItemName.appendChild(itemElement);
});