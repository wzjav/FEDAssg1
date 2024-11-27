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
    } else {
      alert("Message Submitted!");
      form.reset();
    }
  }

  function filterItems(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block'; // Show all items
      } else if (item.classList.contains(category)) {
        item.style.display = 'block'; // Show items of the selected category
      } else {
        item.style.display = 'none'; // Hide other items
      }
    });
  }
  