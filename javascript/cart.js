let cart = [];

function addToCart(product){
    cart.push(product);
    console.log("Item added to cart:", product);
}

const kebabButton = document.getElementById('kebabButton');

kebabButton.addEventListener('click', function() {addToCart(kebabPizza)});