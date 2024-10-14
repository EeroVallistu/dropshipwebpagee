document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Save the new product to localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        // Clear the form
        productForm.reset();
    });
});