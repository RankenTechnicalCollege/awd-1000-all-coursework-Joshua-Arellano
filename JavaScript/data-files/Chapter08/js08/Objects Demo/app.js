"use strict";

//--------------------------------------------------
//Constructor Function for User-Created Objects
//--------------------------------------------------

class Car {
  constructor(brand, model) {
    // Calling Properties of the Car object
    this.brand = brand;
    this.model = model;
    this.speed = 0;

    this.accelerate = () => {
      if (this.speed > 0) {
        this.speed *= 2;
      } else {
        this.speed += 5;
      }
    };

    this.brake = () => {
      if (this.speed > 0) {
        this.speed -= 20;
      }
    };

    this.describe = () => {
      return `${this.brand} ${this.model} - Speed: ${this.speed} mph`;
    };
  }
}

//--------------------------------------------------
//UI Logic
//--------------------------------------------------

let currentCar = null;

let brandInput = document.getElementById("brandInput")
let modelInput = document.getElementById("modelInput")
let outputBox = document.getElementById("output");

let createBtn = document.getElementById("createCarBtn");
let accBtn = document.getElementById("accBtn");
let brakeBtn = document.getElementById("brakeBtn");

//Create a new car when button is clicked
createBtn.onclick = ()=> {
  let brand  = brandInput.value.trim();
  let model = modelInput.value.trim();

  if (brand === "" || model === "") {
    outputBox.textContent = "Please enter both brand and model.";
    return;
  }

  currentCar = new Car(brand, model);

  accBtn.disabled = false;
  brakeBtn.disabled = false;

  outputBox.textContent = currentCar.describe();
}

//Accelerate button
accBtn.onclick = function() {
  currentCar.accelerate();
  outputBox.textContent = currentCar.describe();
};

//Brake button
brakeBtn.onclick = function() {
  currentCar.brake();
  outputBox.textContent = currentCar.describe();
}