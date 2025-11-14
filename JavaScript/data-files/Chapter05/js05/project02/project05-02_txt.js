"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Joshua Arellano
      Date: 11/12/2025

      Filename: project05-02.js
*/

// Declare variables
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

// For loop to assign onclick event to images
for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
      if (this.parentElement.id === "photo_bucket") {
            const newItem = document.createElement("li");
            photoList.appendChild(newItem);
            newItem.appendChild(this);
         } else {
            const oldItem = this.parentElement;
            photoBucket.appendChild(this);
            oldItem.remove();
         }
      };
}

