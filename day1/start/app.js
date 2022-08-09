let value = 0;

const htmlValue = document.getElementById("value");
htmlValue.innerHTML = 0;

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", function (event) {
  if (value >= 20) {
    alert("Must not be greater than 20");
  } else {
    value += 1;
    htmlValue.innerHTML = value;
  }
});

decreaseButton.addEventListener("click", function () {
  if (value <= 0) {
    alert("Must not be less than 0");
  } else {
    value -= 1;
    htmlValue.innerHTML = value;
  }
});
