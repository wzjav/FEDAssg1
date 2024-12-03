// Add to cart function
function addToCart() {
  // Get the selected quantity
  const quantity = parseInt(document.getElementById("quantity").value);
  
  // Product details
  const product = {
    name: "Hokkaido-Flavoured Strawberry Milk",
    price: 7.9,
    image: "./Pictures/Hokkaido-Milk1.webp",
    quantity: quantity,
  };
  
  // get cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // set to empty array if cart is null
  
  // Check if the product exists in the cart
  const existingProduct = cart.find(item => item.name === product.name);
  
  if (existingProduct) {
    // Update the quantity
    existingProduct.quantity += quantity;
  } 
  else {
    // Add the new product to the cart
    cart.push(product);
  }
  
  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Alert user and direct to the cart page
  alert(`Added ${quantity} item(s) to the cart!`); 
  window.location.href = "cart.html";
}

