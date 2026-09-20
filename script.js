let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        alert('Product added to cart successfully!');
    });
});
