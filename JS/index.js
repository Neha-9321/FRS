function addToCart(image, name, brand, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ image, name, brand, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to the cart!`);
  console.log('Cart after adding item:', cart); // Debugging statement
}