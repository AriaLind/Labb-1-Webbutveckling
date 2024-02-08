let cart = [];
let totalCost = 0;

//#region Classes

class Pizza{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const kebabLarge = new Pizza("Kebab Pizza", 7.99);
const kebabMedium = new Pizza("Kebab Pizza", 6.99);
const kebabSmall= new Pizza("Kebab Pizza", 5.99);

const salamiLarge = new Pizza("Salami Pizza", 6.99);
const salamiMedium = new Pizza("Salami Pizza", 5.99);
const salamiSmall = new Pizza("Salami Pizza", 4.99);

const calzoneLarge = new Pizza("Calzone", 6.99);
const calzoneMedium = new Pizza("Calzone", 5.99);
const calzoneSmall = new Pizza("Calzone", 4.99);

const margheritaLarge = new Pizza("Margherita Pizza", 4.99);
const margheritaMedium = new Pizza("Margherita Pizza", 3.99);
const margheritaSmall = new Pizza("Margherita Pizza", 2.99);

const hawaiianLarge = new Pizza("Hawaiian Pizza", 5.99);
const hawaiianMedium = new Pizza("Hawaiian Pizza", 4.99);
const hawaiianSmall = new Pizza("Hawaiian Pizza", 3.99);

//#endregion

//#region EventListeners

const kebabButtonLarge = document.getElementById('kebabButtonLarge');
kebabButtonLarge.addEventListener('click', function() {addToCart(kebabLarge)});
const kebabButtonMedium = document.getElementById('kebabButtonMedium');
kebabButtonMedium.addEventListener('click', function() {addToCart(kebabMedium)});
const kebabButtonSmall = document.getElementById('kebabButtonSmall');
kebabButtonSmall.addEventListener('click', function() {addToCart(kebabSmall)});


const salamiButtonLarge = document.getElementById('salamiButtonLarge');
salamiButtonLarge.addEventListener('click', function() {addToCart(salamiLarge)});
const salamiButtonMedium = document.getElementById('salamiButtonMedium');
salamiButtonMedium.addEventListener('click', function() {addToCart(salamiMedium)});
const salamiButtonSmall = document.getElementById('salamiButtonSmall');
salamiButtonSmall.addEventListener('click', function() {addToCart(salamiSmall)});

const calzoneButtonLarge = document.getElementById('calzoneButtonLarge');
calzoneButtonLarge.addEventListener('click', function() {addToCart(calzoneLarge)});
const calzoneButtonMedium = document.getElementById('calzoneButtonMedium');
calzoneButtonMedium.addEventListener('click', function() {addToCart(calzoneMedium)});
const calzoneButtonSmall = document.getElementById('calzoneButtonSmall');
calzoneButtonSmall.addEventListener('click', function() {addToCart(calzoneSmall)});

const margheritaButtonLarge = document.getElementById('margheritaButtonLarge');
margheritaButtonLarge.addEventListener('click', function() {addToCart(margheritaLarge)});
const margheritaButtonMedium = document.getElementById('margheritaButtonMedium');
margheritaButtonMedium.addEventListener('click', function() {addToCart(margheritaMedium)});
const margheritaButtonSmall = document.getElementById('margheritaButtonSmall');
margheritaButtonSmall.addEventListener('click', function() {addToCart(margheritaSmall)});

const hawaiianButtonLarge = document.getElementById('hawaiianButtonLarge');
hawaiianButtonLarge.addEventListener('click', function() {addToCart(hawaiianLarge)});
const hawaiianButtonMedium = document.getElementById('hawaiianButtonMedium');
hawaiianButtonMedium.addEventListener('click', function() {addToCart(hawaiianMedium)});
const hawaiianButtonSmall = document.getElementById('hawaiianButtonSmall');
hawaiianButtonSmall.addEventListener('click', function() {addToCart(hawaiianSmall)});

const checkOutButton = document.getElementById('checkOutButton')
checkOutButton.addEventListener('click', function() {checkOut()})

//#endregion

//#region Functions

function addToCart(product) {
    const cartItemName = document.getElementById('cart-item');
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
    const cartItemName = document.getElementById('cart-item');
    const cartTotalPrice = document.getElementById('cart-total-price');

    cart = [];
    totalCost = 0;

    cartItemName.innerHTML = "";
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);

    console.log(`Checkout. Total cost: ${totalCost}`);
    console.log(`Cart: ${cart}`);
}

//#endregion

//#region Modals

var modal = document.getElementById("kebabModal");
var modal = document.getElementById("salamiModal");
var modal = document.getElementById("calzoneModal");
var modal = document.getElementById("margheritaModal");
var modal = document.getElementById("hawaiianModal");

var btn = document.getElementById("kebabModalButton");
var btn = document.getElementById("salamiModalButton");
var btn = document.getElementById("calzoneModalButton");
var btn = document.getElementById("margheritaModalButton");
var btn = document.getElementById("hawaiianModalButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//#endregion