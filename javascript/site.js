function Pizza(name, price){
    this.name = name;
    this.price = price;
}

const kebab = new Pizza("Kebab Pizza", 7.99);
const salami = new Pizza("Salami Pizza", 6.99);
const calzone = new Pizza("Calzone", 6.99);
const margherita = new Pizza("Margherita Pizza", 4.99);
const hawaiian = new Pizza("Hawaiian Pizza", 5.99);

if (document.getElementById('kebabButton') !== null){
    const kebabButton = document.getElementById('kebabButton');
    kebabButton.addEventListener('click', function() {addToCart(kebab)});
}

if (document.getElementById('salamiButton') !== null){
    const salamiButton = document.getElementById('salamiButton');
    salamiButton.addEventListener('click', function() {addToCart(salami)});
}

if (document.getElementById('calzoneButton') !== null){
    const calzoneButton = document.getElementById('calzoneButton');
    calzoneButton.addEventListener('click', function() {addToCart(calzone)});
}

if (document.getElementById('margheritaButton') !== null){
    const margheritaButton = document.getElementById('margheritaButton');
    margheritaButton.addEventListener('click', function() {addToCart(margherita)});
}

if (document.getElementById('hawaiianButton') !== null){
    const hawaiianButton = document.getElementById('hawaiianButton');
    hawaiianButton.addEventListener('click', function() {addToCart(hawaiian)});
}

const cartItemName = document.getElementById('cart-item-name');
const cartItemPrice = document.getElementById('cart-item-price');
const cartTotalPrice = document.getElementById('cart-total-price')


let cart = [];
let totalCost = 0;

async function addToCart(product) {
    cart.push(product);
    console.log("Item added to cart:", product);

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
    itemElement.appendChild(priceElement);
    itemElement.appendChild(document.createElement('br'));

    cartItemName.appendChild(itemElement);
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);
}

const checkOutButton = document.getElementById('checkOutButton')
checkOutButton.addEventListener('click', function() {checkOut()})

function checkOut(){
    cart = [];
    totalCost = 0;

    cartItemName.innerHTML = "";
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);
}