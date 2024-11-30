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

// function to update cart summary (total amount and quantity)
function updateCartSummary() {
  const selectedItems = cart.filter(item => item.selected); // get items that are selected
  const totalAmount = selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0); // calculate total price
  const itemCount = selectedItems.reduce((count, item) => count + item.quantity, 0); // calculate total quantity
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2); // update total price
  document.getElementById("item-count").textContent = itemCount; //update total quantity
}

// update cart function
function updateCartPage() {
  cartItemsContainer.innerHTML = ""; //clear current cart item
  updateCartSummary(); //call function to update susmmary of cart

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block"; // Displays the empty cart message
  } 
  else {
    emptyCartMessage.style.display = "none"; // Does not display the empty cart message
  }
}

// checkout button function
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
