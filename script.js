// Shop now button function
function shopNow() {
    //alert("Menu Page Opened");
    window.location.href = "menu.html"; // Direct the user to menu page

}

//Redeem Now function
function redeemNow() {
    alert("Redeeming your 20% OFF offer!"); //Sends messages to user 
}

// Submit button function
function onSubmit(event) {
  // Prevents the form from refreshing when not all values keyed in 
  event.preventDefault();
  
  // Get values of the form fields
  const form = document.querySelector("form");
  const name = document.querySelector('input[placeholder="Name"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const message = document.querySelector('input[placeholder="Message"]').value;
  
  // Check if any field is empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields."); //Sends messages to user to fill in all fields
  } 
  else {
    alert("Message Submitted!"); //Sends messages to user that message submitted
    form.reset(); // resets the form
  }
}

//Filter function
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

 // Add to cart function
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

//Click product function
function clickProduct() {
  //alert("Opening menu page");
  window.location.href = "product.html"; // Direct user to menu page

}

// cart page 
// Get the cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart"));
cart.forEach(item => item.selected = true); // mark items as selected

// Display cart items
const cartItemsContainer = document.getElementById("cart-items"); // Looks for id (cart-items) and assigns to variable
const emptyCartMessage = document.getElementById("empty-cart-message"); // Looks for id (empty-cart-message) and assigns to variable

if (cart.length === 0) {
  emptyCartMessage.style.display = "block"; // Displays the empty cart message
} 
else {
  emptyCartMessage.style.display = "none"; // Does not display the empty cart message

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item"; // assign to class  

    //checkbox to select items
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selected;
    checkbox.className = "product-checkbox";
    checkbox.addEventListener("change", () => {
      // update checkbox with selected
      item.selected = checkbox.checked;
      updateCartSummary();
    });
    checkboxContainer.appendChild(checkbox);

    //product image
    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = item.name;

    //Product information
    const productInfo = document.createElement("div");
    productInfo.className = "product-info";

    const productName = document.createElement("h3");
    productName.textContent = item.name;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Qty: ${item.quantity}`;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    //button to remove products from cart
    const removeButton = document.createElement("div");
    removeButton.className = "remove-button";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => removeFromCart(item.name));

    productInfo.appendChild(productName);
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productPrice);

    //Add items to the cart item container
    cartItem.appendChild(checkboxContainer);
    cartItem.appendChild(productImage);
    cartItem.appendChild(productInfo);
    cartItem.appendChild(removeButton);

    // add items in cart to cart items container
    cartItemsContainer.appendChild(cartItem);
  });

  // Update the total amount and item amount
  updateCartSummary();
}

// function to remove item from cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName); // filter item to remove
  localStorage.setItem("cart", JSON.stringify(cart)); // update localStorage
  updateCartPage(); //update cart display
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
    emptyCartMessage.style.display = "block"; // Displays the empty cart message
  } 
  else {
    emptyCartMessage.style.display = "none"; // Does not display the empty cart message
  }
}

function checkOutButton(){

  // Check if at least one item is selected
  const selectedItems = cart.filter(item => item.selected);

  if (cart.length === 0) {
    // if cart is empty
    alert("Your cart is empty! Add something to check out!"); // Sends messages to user
    return;
  }
  else if (selectedItems.length === 0){
    alert("No items selected! Please select at least one item to check out!");// Sends messages to user
    return;
  }
  else{
    // if there is something in cart
    alert("Checked Out! Thank you and have a nice day!"); // Sends messages to user
    
  }
  

  // Clear the cart
  cart = []; // Empty cart array
  localStorage.setItem("cart", JSON.stringify(cart)); // Update the localStorage

  // Update cart display
  updateCartPage();
}
