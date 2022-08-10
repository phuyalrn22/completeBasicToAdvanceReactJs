let value = 0;

const htmlValue = document.getElementById("value");
htmlValue.innerHTML = 0;

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const saveButton = document.getElementById("save");
const resultValue=  document.getElementById('resultValue')

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


saveButton.addEventListener('click', function (e){
  var htmlText = resultValue.innerHTML;
  if(htmlText[htmlText-1]===value.toString()){
    alert("same as previous")
  }
  else if(htmlText===''){
    resultValue.innerHTML = value
  }else {
    resultValue.innerHTML += `, ${value}`
  }
})