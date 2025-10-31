// Movie list wouldn't work without window.onload
window.onload = function () {

  //Favorite Movie List
  const favoriteMovies = ["- Pulp Fiction", "- The Shining", "- Alien"];

  const addButton = document.getElementById("addMovie");
  const addInput = document.getElementById("movieInput");
  const list = document.getElementById("movieList");

  addButton.addEventListener("click", function () {
    const newMovie = addInput.value.trim();

    if (newMovie !== "") {
      favoriteMovies.push(newMovie);
      addInput.value = "";
    }

    list.innerHTML = "";
    for (let i = 0; i < favoriteMovies.length; i++) {
      const item = document.createElement("li");
      item.textContent = favoriteMovies[i];
      list.appendChild(item);
    }
  });

  for (let i = 0; i < favoriteMovies.length; i++) {
    const item = document.createElement("li");
    item.textContent = favoriteMovies[i];
    list.appendChild(item);
  }

  
  //Age Verification
  const button = document.getElementById("verifyAge");
  const input = document.getElementById("ageInput");
  const message = document.getElementById("ageMsg");

  button.addEventListener("click", function () {
    const ageText = input.value.trim();
    const age = Number(ageText);

    if (!Number.isInteger(age) || ageText === "") {
      message.textContent = "Please enter your age";
    } else if (age < 1 || age > 400) {
      message.textContent = "Age out of range";
    } else if (age < 21) {
      message.textContent = "You're not old enough.";
    } else if (age > 299) {
      message.textContent = "Welcome in Chief keef"
    } else {
      message.textContent = "Welcome to the venue.";
    }
  });
};

//Song Lyrics
  document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("numberInput");
    const submitBtn = document.getElementById("submitBtn");
    const messageOutput = document.getElementById("messageOutput");

    submitBtn.addEventListener("click", () => {
      const userValue = numberInput.value.trim();

      if (isNaN(userValue)) {
        messageOutput.textContent = "Please enter a number, not a word.";     
        return;
      }

      const number = parseInt(userValue, 10);

      switch (number) {
        case 1:
          messageOutput.textContent = "One is the loneliest number that you'll ever do.";
          break;
        case 2:
          messageOutput.textContent = "Two can be as bad as one, it's the loneliest number since the number one.";
          break;
        case 3:
          messageOutput.textContent = "There is no three.";
          break;
        default:
          messageOutput.textContent = "You didn't enter a valid number.";
    }
  });
});

// Odd Numbers
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Multiples of 15
for (let i = 15; i <= 90; i += 15) {
  console.log(i);
}