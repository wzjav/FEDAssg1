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

//Click product function
function clickProduct() {
  //alert("Opening menu page");
  window.location.href = "product.html"; // Direct user to menu page
}