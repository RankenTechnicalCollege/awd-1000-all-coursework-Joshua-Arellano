"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Joshua Arellano
      Date: 11/15/2025

      Filename: project06-01.js
*/

const submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Event listener to validate the form password
submitButton.addEventListener("click", function(event) {
      if (pwd.value.length < 8 || !/[A-Za-z]/.test(pwd.value) || !/\d/.test(pwd.value)) {
            //event to prevent form submission without valid password
            event.preventDefault();
            alert("Your password must be at least 8 characters with at least one letter and one number");
      } else if (pwd.value !== pwd2.value) {
            event.preventDefault();
            alert("Your passwords do not match");
      } else {
            ""
      }
});