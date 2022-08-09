let value = 0;

const htmlValue = document.getElementById("value");
htmlValue.innerHTML = 0;

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener("click", function (event) {
    if (value>=20){
        alert("Value must not be more than 20")
    }else{
        value +=1;
        htmlValue.innerHTML = value;
    }
})

decreaseButton.addEventListener("click", function (event) {
    if (value<=0){
        alert("Value must not be less than 0")
    }else{
        value -=1;
        htmlValue.innerHTML = value;
    }
})