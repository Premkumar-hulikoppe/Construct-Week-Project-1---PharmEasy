
let btn = document.querySelector('button');

btn.onclick = function(){
    let cardNum = document.getElementById('number').value;

let month = document.getElementById('month').value;

let cvv = document.getElementById('cvv').value;


let name = document.getElementById('name').value;

if(cardNum == "" ){
    alert("Please Enter card Number");
}else if(cardNum.toString().length != 16){
    alert("Card Number should consist of 16 digits");
}else if(month == ""){
    alert("Please enter valid month")
}else if(cvv == ""){
    alert("Please enter valid cvv");
}else if(cvv.toString().length != 3){
    alert("CVV should consist of 3 digits");
}else if(name == ""){
    alert("Please enter valid name");
}else{
    window.location.href = "otp.html";
}
}