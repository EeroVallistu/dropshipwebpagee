document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button class="buy-button" data-id="${product.id}">Buy</button>
        `;
        productsContainer.appendChild(productElement);
    });

    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            addToCart(productId);
        });
    });
});

// script.js
function addToCart() {
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem('cartCount', cartCount);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
}