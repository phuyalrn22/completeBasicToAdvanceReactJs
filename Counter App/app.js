let value = 0;
const text = document.getElementById("value");
text.innerHTML = 0;
const inreaseBtn = document.getElementById("increase");

const decreaseBtn = document.getElementById("decrease");
const saveBtn= document.getElementById("save");
const savePeople = document.getElementById("savepeople");
// For Logic to Increase the number
inreaseBtn.addEventListener("click", function (e){
    if(value>=20){
        alert("Bus is Full!!!")
    }
    else{
        value +=1;
        text.innerHTML = value
    }
    
});

// For logic to Dreases the number
decreaseBtn.addEventListener("click", function (e){
    if(value<=1){
        alert("Bus is Contains Minimum 1 Person!!!")
    }
    else{
        value -=1;
        text.innerHTML = value;
    }
});
// For Logic to Save People
saveBtn.addEventListener("click", function (e){
    var htmlText = savePeople.innerHTML;
    if(htmlText.length[htmlText-1]===value.toString()){
            alert("Same As Privious");
        }
    else if(htmlText===''){
            savePeople.innerHTML += value;
        }
    else{
            savePeople.innerHTML += `, ${value}`;
        }
   

});