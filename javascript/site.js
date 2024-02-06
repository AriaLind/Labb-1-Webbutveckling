function Pizza(name, price){
    this.name = name;
    this.price = price;
}

const kebabPizza = new Pizza("Kebab Pizza", 5.0);

const cart = [];

if (document.getElementById('kebabButton') !== null){
    const kebabButton = document.getElementById('kebabButton');
    kebabButton.addEventListener('click', function() {addToCart(kebabPizza)});
}

const cartItemName = document.getElementById('cart-item-name');
const cartItemPrice = document.getElementById('cart-item-price');
const cartTotalPrice = document.getElementById('cart-total-price')

async function addToCart(product) {
    cart.push(product);
    console.log("Item added to cart:", product);

    let totalCost = 0;

    cart.forEach(item => {
        totalCost += item.price;
    });

    console.log(totalCost);

    const itemElement = document.createElement('div');
    const nameElement = document.createElement('span');
    const priceElement = document.createElement('span');

    nameElement.textContent = product.name;
    priceElement.textContent = '$' + product.price.toFixed(2);

    itemElement.appendChild(nameElement);
    itemElement.appendChild(document.createElement('br'));
    itemElement.appendChild(document.createTextNode('$'));
    itemElement.appendChild(priceElement);
    itemElement.appendChild(document.createElement('br'));

    cartItemName.appendChild(itemElement);
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);
}


