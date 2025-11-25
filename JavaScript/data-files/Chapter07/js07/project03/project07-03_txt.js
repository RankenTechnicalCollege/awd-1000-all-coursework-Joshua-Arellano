"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Joshua Arellano
      Date: 11/25/2025

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
      let now = new Date();
      now.toLocaleString("en-US", new Date);
      let newYear = new Date("Thu Jan 1 2026 00:00:00 GMT-0600");
      let nextYear = now.getFullYear() + 1;
      newYear.setFullYear(nextYear);

      //Calculations
      let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);
      let hrsLeft = (daysLeft % 1) * 24;
      let minsLeft = (hrsLeft % 1) * 60;
      let secsLeft = (minsLeft % 1) * 60;

      //Display current time
      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
}