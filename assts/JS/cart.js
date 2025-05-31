// Example cart array
let cart = [];

function checkCart() {
  if (cart.length === 0) {
    document.getElementById('empty-cart').style.display = 'block';
    document.getElementById('cart-items').style.display = 'none';
  } else {
    document.getElementById('empty-cart').style.display = 'none';
    document.getElementById('cart-items').style.display = 'block';
  }
}

function returnToShop() {
  window.location.href = 'shop.html'; // Change this to your shop page
}

// Call on page load
checkCart();
