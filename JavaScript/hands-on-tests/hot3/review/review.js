"use strict";
const upvoteCount = document.getElementById("upvoteCount");
const downvoteCount = document.getElementById("downvoteCount");
const totalCount = document.getElementById("totalCount");

// Initialize counts
upvoteCount.textContent ||= "0";
downvoteCount.textContent ||= "0";
totalCount.textContent ||= "Total: 0";

// Event listeners for upvote and downvote buttons
upvoteBtn.addEventListener("click", () => {
  upvoteCount.textContent = parseInt(upvoteCount.textContent) + 1;
  totalCount.textContent = "Total: " + (parseInt(upvoteCount.textContent) - parseInt(downvoteCount.textContent));
});

downvoteBtn.addEventListener("click", () => {
  downvoteCount.textContent = parseInt(downvoteCount.textContent) + 1;
  totalCount.textContent = "Total: " + (parseInt(upvoteCount.textContent) - parseInt(downvoteCount.textContent));
});