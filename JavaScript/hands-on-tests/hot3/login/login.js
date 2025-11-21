"use strict";
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

 // Event listener to validate the login form
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (email.value === "" || password.value === "") {
    message.className = "mt-3 text-danger";
    message.textContent = "You seem to have forgotten your username and password.";
  } else if (email.value === 'admin@example.com' && password.value === 'password') {
    message.className = "mt-3 text-success";
    message.textContent = "Welcome back Admin!";
  } else {
    message.className = "mt-3 text-danger";
    message.textContent = "That email and password doesn't seem to be right. Try again.";
  }
});