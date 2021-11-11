let oriPrice = document.getElementById('oriPrice');

let curPrice = document.getElementById('curPrice');

let cart = JSON.parse(localStorage.getItem("cart"));

let preValue = 0;
let curValue = 0;
let length = 0;

cart.forEach(function(el){
    preValue += +(el.oriPrice);
    curValue += +(el.curPrice);
    length++;
});
console.log(length);
oriPrice.textContent = `Rs${preValue.toFixed(2)}`;
curPrice.textContent = `Rs${curValue.toFixed(2)}`;

let preDeliveryCharge = length * 48;
let postDeliveryCharge = length * 29;

let oDelivery = document.getElementById('DelioriPrice');
oDelivery.textContent = `Rs.${preDeliveryCharge.toFixed(2)}`;

let pDelivery = document.getElementById('DelicurPrice');
pDelivery.textContent = `Rs.${postDeliveryCharge.toFixed(2)}`;

let savings = document.getElementById('savings');

savings.textContent = `Rs.${(preValue-curValue).toFixed(2)}`;

let payment = document.getElementById('payment');

payment.textContent = `Rs.${(curValue+postDeliveryCharge).toFixed(2)}`;

let debitCards = document.getElementById('third');
debitCards.onclick = function(){
    window.location.href = "payment.html";
}