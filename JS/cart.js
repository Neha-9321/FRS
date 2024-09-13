function displayCart() {
  const productContainer = document.getElementById('product-container');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length > 0) {
      productContainer.innerHTML = cart.map((product, index) => `
          <div class="cart-item">
              <button class="cart-btn delete-btn" onclick="removeFromCart(${index})">Delete</button>
              <img src="${product.image}" alt="${product.name}" class="cart-product-image"/>
              <div class="cart-item-details">
                  <h3>${product.name}</h3>
                  <p>${product.brand}</p>
                  <p class="price">${product.price}</p>
                  <div class="cart-buttons">
                      <button class="cart-btn buy-btn" onclick="buyNow(${index})">Buy Now</button>
                      <button class="cart-btn try-btn" onclick="tryNow(${index})">Try Now</button>
                  </div>
              </div>
          </div>
      `).join('');
  } else {
      productContainer.innerHTML = `
          <div class="empty-cart-container">
              <h3 class="Cart_textcolor">Your Cart Is Empty</h3>
              <button class="shop-now-btn" onclick="location.href='index.html'">Shop Now</button>
          </div>`;
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function buyNow(index) {
  // Implement buy now functionality
  alert('Buy Now functionality to be implemented');
}

function tryNow(index) {
  // Implement try now functionality
  alert('Try Now functionality to be implemented');
}

document.addEventListener('DOMContentLoaded', displayCart);