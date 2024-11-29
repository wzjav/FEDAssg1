function shopNow() {
    //alert("Menu Page Opened");
    window.location.href = "menu.html"; // Direct the user to menu page

}
  
function redeemNow() {
    alert("Redeeming your 20% OFF offer!");
}
function onSubmit(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  
  // Get values of the form fields
  const form = document.querySelector("form");
  const name = document.querySelector('input[placeholder="Name"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const message = document.querySelector('input[placeholder="Message"]').value;
  
  // Check if any field is empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } 
  else {
    alert("Message Submitted!");
    form.reset();
  }
}

function filterItems(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block'; // Show all items
    } 
    else if (item.classList.contains(category)) {
      item.style.display = 'block'; // Show items of the selected category
    } 
    else {
      item.style.display = 'none'; // Hide other items
    }
  });
}

 //Add to cart function
 function addToCart() {
  // Get the selected quantity
  const quantity = parseInt(document.getElementById("quantity").value);

  // Product details
  const product = {
    name: "Hokkaido-Flavoured Strawberry Milk",
    price: 7.9,
    image: "Hokkaido-Milk1.webp",
    quantity: quantity,
  };


  let cart = JSON.parse(localStorage.getItem("cart"));

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


function clickProduct() {
  //alert("Opening menu page");
  window.location.href = "product.html"; // Direct the user to menu page

}

// cart page 
// Get the cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart"));
cart.forEach(item => item.selected = true);

// Display cart items
const cartItemsContainer = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart-message");

if (cart.length === 0) {
  emptyCartMessage.style.display = "block";
} 
else {
  emptyCartMessage.style.display = "none";

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selected;
    checkbox.className = "product-checkbox";
    checkbox.addEventListener("change", () => {
      item.selected = checkbox.checked;
      updateCartSummary();
    });
    checkboxContainer.appendChild(checkbox);

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = item.name;

    const productInfo = document.createElement("div");
    productInfo.className = "product-info";

    const productName = document.createElement("h3");
    productName.textContent = item.name;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Qty: ${item.quantity}`;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    const removeButton = document.createElement("div");
    removeButton.className = "remove-button";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => removeFromCart(item.name));

    productInfo.appendChild(productName);
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productPrice);

    cartItem.appendChild(checkboxContainer);
    cartItem.appendChild(productImage);
    cartItem.appendChild(productInfo);
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);
  });

  // Update the total amount and item amount
  updateCartSummary();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPage();
}

function updateCartSummary() {
  const selectedItems = cart.filter(item => item.selected);
  const totalAmount = selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = selectedItems.reduce((count, item) => count + item.quantity, 0);
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  document.getElementById("item-count").textContent = itemCount;
}

function updateCartPage() {
  cartItemsContainer.innerHTML = "";
  updateCartSummary();

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
  } 
  else {
    emptyCartMessage.style.display = "none";
  }
}

function checkOutButton(){

  // Check if at least one item is selected
  const selectedItems = cart.filter(item => item.selected);

  if (cart.length === 0) {
    // if cart is empty
    alert("Your cart is empty! Add something to check out!");
    return;
  }
  else if (selectedItems.length === 0){
    alert("No items selected! Please select at least one item to check out!");
    return;
  }
  else{
    // if there is something in cart
    alert("Checked Out! Thank you and have a nice day!");
    
  }
  

  // Clear the cart
  cart = []; 
  localStorage.setItem("cart", JSON.stringify(cart)); 

  // Update cart display
  updateCartPage();
}
