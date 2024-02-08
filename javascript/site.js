let cart = [];
let totalCost = 0;

//#region Classes

class Pizza{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const kebab = new Pizza("Kebab Pizza", 7.99);
const salami = new Pizza("Salami Pizza", 6.99);
const calzone = new Pizza("Calzone", 6.99);
const margherita = new Pizza("Margherita Pizza", 4.99);
const hawaiian = new Pizza("Hawaiian Pizza", 5.99);

//#endregion

//#region EventListeners
const kebabButton = document.getElementById('kebabButton');
kebabButton.addEventListener('click', function() {addToCart(kebab)});

const salamiButton = document.getElementById('salamiButton');
salamiButton.addEventListener('click', function() {addToCart(salami)});

const calzoneButton = document.getElementById('calzoneButton');
calzoneButton.addEventListener('click', function() {addToCart(calzone)});

const margheritaButton = document.getElementById('margheritaButton');
margheritaButton.addEventListener('click', function() {addToCart(margherita)});

const hawaiianButton = document.getElementById('hawaiianButton');
hawaiianButton.addEventListener('click', function() {addToCart(hawaiian)});

const checkOutButton = document.getElementById('checkOutButton')
checkOutButton.addEventListener('click', function() {checkOut()})

//#endregion

//#region Functions

async function addToCart(product) {
    const cartItemName = document.getElementById('cart-item-name');
    const cartItemPrice = document.getElementById('cart-item-price');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    cart.push(product);
    console.log("Item added to cart:", product);

    totalCost += product.price;

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

function checkOut(){
    const cartItemName = document.getElementById('cart-item-name');
    const cartTotalPrice = document.getElementById('cart-total-price');

    cart = [];
    totalCost = 0;

    cartItemName.innerHTML = "";
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);

    console.log(`Checkout. Total cost: ${totalCost}`);
    console.log(`Cart: ${cart}`);
}

//#endregion