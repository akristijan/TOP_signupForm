const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Validate first name
  if (firstNameInput.value.trim() === '') {
    alert('Please enter your first name.');
    return;
  }

  // Validate last name
  if (lastNameInput.value.trim() === '') {
    alert('Please enter your last name.');
    return;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate password
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Validate confirmation password
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    return;
  }

  // If all validation passes, you can submit the form or perform further actions
  alert('Form submitted successfully!');
});