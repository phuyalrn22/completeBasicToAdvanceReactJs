let value = 0;

const htmlValue = document.getElementById("value");
htmlValue.innerHTML = 0;

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const saveButton = document.getElementById("save")
const resultValue = document.getElementById('resultedValue')

increaseButton.addEventListener("click", function (event) {
    if (value>=20){
        alert("Value must not be more than 20")
    }else{
        value +=1;
        htmlValue.innerHTML = value;
    }
});

decreaseButton.addEventListener("click", function (event) {
    if (value<=0){
        alert("Value must not be less than 0")
    }else{
        value -=1;
        htmlValue.innerHTML = value;
    }
});

saveButton.addEventListener('click', function(e){
    var htmlText = resultValue.innerHTML;
    if(htmlText[htmlText.length-1] === value.toString()){
        alert("same as previous");
    }
    else if(resultValue.innerHTML  === ''){
        resultValue.innerHTML = value;
    }
    else{

        resultValue.innerHTML += `, ${value}`;
    }
})