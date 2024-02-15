let cart = [];
let totalCost = 0;

const Pizzas = [
    {
        name: 'Kebab Pizza',
        ingredients:
            'Kebab meat, Red onion, Bell peppers, Tomatoes, Jalapeños, Mozzarella cheese, Pizza sauce or tomato sauce, Kebab sauce or garlic sauce',
        price: 7.99,
        imageUrl: '../img/Kebab Pizza.webp',
        imageAlt: 'KebabPizza.webp',
        description:
            "Our signature kebab pizza is a tantalizing blend of succulent kebab meat, crisp red onions, vibrant bell peppers, zesty tomatoes, and spicy jalapeños atop a rich tomato or pizza sauce base. Topped with creamy mozzarella cheese and your choice of kebab or garlic sauce, each bite bursts with flavor and texture, creating a culinary experience that's simply irresistible.",
    },
    {
        name: 'Salami Pizza',
        ingredients:
            'Salami, Mozzarella cheese, Tomato sauce or pizza sauce, Red onion, Bell peppers, Black olives (optional), Mushrooms (optional), Fresh basil (optional)',
        price: 6.99,
        imageUrl: '../img/Salami Pizza.webp',
        imageAlt: 'SalamiPizza.webp',
        description:
            "Indulge in our classic Salami Pizza, crafted with savory salami slices, velvety mozzarella cheese, and tangy tomato or pizza sauce. Enhanced with the aromatic notes of red onions, crisp bell peppers, and optional black olives, mushrooms, or fresh basil, it's a symphony of flavors that will delight your taste buds with every bite.",
    },
    {
        name: 'Calzone',
        ingredients:
            'Salami, Ricotta cheese, Mozzarella cheese, Tomato sauce or marinara sauce, Black olives (optional), Mushrooms (optional), Fresh spinach (optional), Garlic (optional)',
        price: 6.99,
        imageUrl: '../img/Calzone.webp',
        imageAlt: 'Calzone.webp',
        description:
            "Savor the essence of Italy with our delectable Calzone. Stuffed with premium salami, creamy ricotta cheese, and gooey mozzarella, it's a taste of Italian tradition. Enjoy the medley of flavors from zesty tomato sauce or marinara, complemented by optional black olives, mushrooms, fresh spinach, and garlic. Every bite is a journey through the rustic flavors of Italy, wrapped in a golden crust for a perfect culinary experience.",
    },
    {
        name: 'Margherita Pizza',
        ingredients: 'Fresh basil leaves, Mozzarella cheese, Tomato sauce',
        price: 4.99,
        imageUrl: '../img/Margherita Pizza.webp',
        imageAlt: 'MargheritaPizza.webp',
        description:
            'Indulge in the simplicity of our Margherita Pizza, a true Italian classic. Crafted with fresh basil leaves, rich mozzarella cheese, and savory tomato sauce, it embodies the essence of traditional Italian cuisine. Each bite is a harmonious blend of flavors, where the vibrant basil meets the creamy cheese atop a bed of tangy tomato sauce. Experience the authentic taste of Italy in every slice of our Margherita Pizza.',
    },
    {
        name: 'Hawaiian Pizza',
        ingredients:
            'Pineapple chunks, Ham or Canadian bacon, Mozzarella cheese, Tomato sauce',
        price: 5.99,
        imageUrl: '../img/Hawaiian Pizza.webp',
        imageAlt: 'HawaiianPizza.webp',
        description:
            "Savor the tropical flavors of our Hawaiian Pizza, a delightful blend of sweet and savory. Featuring juicy pineapple chunks, succulent ham or Canadian bacon, and gooey mozzarella cheese atop a luscious tomato sauce base, it's a taste of paradise in every bite. Let the contrasting flavors of sweet pineapple and savory ham transport you to the sunny shores of Hawaii with our Hawaiian Pizza.",
    },
];

const pizzaDisplay = document.getElementById('pizza-display');

Pizzas.forEach((pizza) => {
    const pizzaInfoDiv = document.createElement('div');
    pizzaInfoDiv.classList.add('pizza-info');

    const pizzaTitle = document.createElement('h2');
    pizzaTitle.textContent = pizza.name;

    const pizzaContentDiv = document.createElement('div');
    pizzaContentDiv.classList.add('pizza-content');

    const pizzaimage = document.createElement('img');
    pizzaimage.src = pizza.imageUrl;
    pizzaimage.alt = pizza.imageAlt;
    pizzaimage.loading = 'lazy';
    pizzaimage.classList.add('shadow');

    const pizzaDescription = document.createElement('p');
    pizzaDescription.textContent = pizza.description;

    const pizzaModalButton = document.createElement('button');
    pizzaModalButton.classList.add('btn', 'btn-dark', 'mb-2');
    pizzaModalButton.textContent = 'Info';
    pizzaModalButton.id = `${pizza.name}ModalButton`;

    const pizzaOrderButton = document.createElement('button');
    pizzaOrderButton.classList.add('btn', 'btn-dark', 'mb-2');
    pizzaOrderButton.textContent = 'Add to cart';
    pizzaOrderButton.addEventListener('click', function () {
        addToCart(pizza);
    });

    pizzaInfoDiv.appendChild(pizzaTitle);
    pizzaInfoDiv.appendChild(pizzaContentDiv);
    pizzaContentDiv.appendChild(pizzaimage);
    pizzaContentDiv.appendChild(pizzaDescription);
    pizzaContentDiv.appendChild(pizzaModalButton);
    pizzaContentDiv.appendChild(pizzaOrderButton);

    const pizzaModal = document.createElement('div');
    pizzaModal.classList.add('modal');

    const pizzaModalContent = document.createElement('div');
    pizzaModalContent.classList.add('modal-content');
    pizzaModal.appendChild(pizzaModalContent);

    const modalSpan = document.createElement('span');
    modalSpan.classList.add('close');
    modalSpan.textContent = 'x';
    pizzaModalContent.appendChild(modalSpan);

    const pizzaModalBody = document.createElement('section');
    pizzaModalBody.classList.add('modal-body');
    pizzaModalContent.appendChild(pizzaModalBody);

    const ingredients = document.createElement('p');
    ingredients.textContent = `Ingredients:\n ${pizza.ingredients}`;
    pizzaModalBody.appendChild(ingredients);

    const pizzaPrice = document.createElement('section');
    pizzaPrice.classList.add('modal-body');
    const priceDisplay = document.createElement('p');
    priceDisplay.textContent = `Price: $${pizza.price}`;
    pizzaPrice.appendChild(priceDisplay);
    pizzaModalBody.appendChild(pizzaPrice);

    pizzaModalButton.onclick = function () {
        pizzaModal.style.display = 'block';
    };

    modalSpan.onclick = function () {
        pizzaModal.style.display = 'none';
    };

    window.addEventListener('click', function (event) {
        if (event.target == pizzaModal) {
            pizzaModal.style.display = 'none';
        }
    });

    pizzaDisplay.appendChild(pizzaInfoDiv);
    pizzaDisplay.appendChild(pizzaModal);
});

const checkOutButton = document.getElementById('checkOutButton');
checkOutButton.addEventListener('click', function () {
    checkOut();
});

//#region Functions

function addToCart(product) {
    totalCost += product.price;

    const shoppingCart = document.getElementById('shopping-cart');

    const cartItemContainer = document.createElement('div');
    cartItemContainer.id = `${product.name}-item`;
    cartItemContainer.classList.add('cart-item-container');

    const cartItemText = document.createElement('p');
    cartItemText.textContent = `${product.name} $${product.price}`;
    cartItemText.classList.add('cart-item-text');

    const removeItemButton = document.createElement('button');
    removeItemButton.textContent = 'Remove';
    removeItemButton.classList.add('btn', 'btn-dark', 'btn-sm');
    removeItemButton.addEventListener('click', function () {
        removeFromCart(product);
    });

    cartItemContainer.appendChild(cartItemText);
    cartItemContainer.appendChild(removeItemButton);

    shoppingCart.appendChild(cartItemContainer);

    cart.push(product);

    const cartTotalPrice = document.getElementById('cart-total-price');
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);

    console.log(totalCost);
    console.log(cart);
}

function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index !== -1) {
        cart.splice(index, 1);
        totalCost -= product.price;
        const cartTotalPrice = document.getElementById('cart-total-price');
        cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);
        const itemToRemove = document.getElementById(`${product.name}-item`);
        itemToRemove.parentNode.removeChild(itemToRemove);
    }
    if (cart.length === 0) {
        totalCost = 0;
    }
    console.log(totalCost);
    console.log(cart);
}

function checkOut() {
    const shoppingCart = document.getElementById('shopping-cart');
    const cartTotalPrice = document.getElementById('cart-total-price');

    cart = [];
    totalCost = 0;

    shoppingCart.innerHTML = '';
    cartTotalPrice.textContent = 'Total Cost: $' + totalCost.toFixed(2);

    console.log(`Checkout. Total cost: ${totalCost}`);
    console.log(`Cart: ${cart}`);
}

//#endregion
