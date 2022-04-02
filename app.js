let counter = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button, button.classList.contains);
    if (button.classList.contains("increase")) {
      counter++;
    } else if (button.classList.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      value.style.color = "red";
    } else if (counter > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
    value.textContent = counter;
  });
});
