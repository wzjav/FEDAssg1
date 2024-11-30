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