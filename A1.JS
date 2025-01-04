// JavaScript for input validation and form submission
document.addEventListener("DOMContentLoaded", () => {
    // Add functionality to validate inputs
    const phoneInput = document.querySelector('input[name="ph"]');
    const emailInput = document.querySelector('input[type="email"]');
    const nameInput = document.querySelector('input[name="name"]');
    const submitButton = document.querySelector('input[type="submit"]');
    // Add event listener to the submit button
    submitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default form submission
      // Check if inputs are valid
      if (!phoneInput.value.match(/^\d{10}$/)) {
        alert("Please enter a valid 10-digit phone number!");
        return;
      }
      if (!emailInput.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        alert("Please enter a valid email address!");
        return;
      }
      if (nameInput.value.trim() === "") {
        alert("Please enter your name!");
        return;
      }
      // If everything is valid
      alert("Form submitted successfully!");
    });
  });
  