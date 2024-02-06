const kebabButton = document.getElementById('kebabButton');

function addToCart(product){
    cart.push(product);
    console.log("Item added to cart:", product);
}



kebabButton.addEventListener('click', function() {addToCart(kebabPizza)});