function Pizza(name, price){
    this.name = name;
    this.price = price;
}

const kebabPizza = new Pizza("Kebab Pizza", 5.0);

const cart = [];

const cartItemName = document.getElementById('cart-item-name');
const cartItemPrice = document.getElementById('cart-item-price');



if (document.getElementById('kebabButton') !== null){
    const kebabButton = document.getElementById('kebabButton');
    kebabButton.addEventListener('click', function() {addToCart(kebabPizza)});
}

async function addToCart(product){
    cart.push(product);
    console.log("Item added to cart:", product);
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
}

