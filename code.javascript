// js/main.js

// Simple cart array
let cart = [];

// Function to add to cart
function addToCart(item) {
    cart.push(item);
    alert('Added to cart: ' + item);
    console.log(cart);  // In a real app, update the UI or send to server
}

// Filter books (simplified)
document.getElementById('genre').addEventListener('change', function() {
    const selectedGenre = this.value;
    alert('Filtering by: ' + selectedGenre);
    // In a real app, fetch and filter books from an API
});

// Example: Add event listeners to buttons
document.querySelectorAll('.book-card button').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement.querySelector('h3').textContent;
        addToCart(item);
    });
});
