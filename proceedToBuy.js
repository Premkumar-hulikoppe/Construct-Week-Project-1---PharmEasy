let box2 = document.querySelector('.box2');

let cartItems = JSON.parse(localStorage.getItem("cart"));

let totalPrevValue = 0;
let totalCurValue = 0;

function showProducts(){

 cartItems.forEach(function(el){
     let contanier = document.createElement("div");

     contanier.setAttribute('class', "mainItem");

     let div1 = document.createElement("div");

     let img = document.createElement("img");

     div1.setAttribute('class', "div1");

     img.src = el.img;
      
      div1.append(img);

     let div2 = document.createElement("div");

     div2.setAttribute('class', "div2");

     let sub2 = document.createElement("div");

     sub2.textContent = el.name;

     sub2.setAttribute('class', "sub2");

     let para = document.createElement("p");

     para.textContent = "By Mankind";

     let h3 = document.createElement("h3");

     h3.textContent = "500 GM";

     let sub3 = document.createElement("div");

     sub3.setAttribute('class', "sub3");

     let select = document.createElement("select");

     let option = document.createElement("option");

     option.textContent = "Qty 1";

     option.setAttribute("class", "option");

     select.append(option);
     
     select.setAttribute('class', "option");

     let sub4 = document.createElement("div");

     sub4.setAttribute('class', "sub4");

     let tag = document.createElement("div");

     let oriPrice = document.createElement("div");

     oriPrice.textContent ="MRP Rs. " + el.oriPrice + "*";

     oriPrice.setAttribute('class', "originalPrice");

     tag.textContent = "Save 20%"

     tag.setAttribute('class', "tag");
      
      let sub5 = document.createElement("div");

      sub5.setAttribute('class', "sub5");
       
      sub5.append(tag, oriPrice);

      let price = document.createElement("h4");

      price.setAttribute('class', "price");

    price.textContent = "Rs. "+ el.curPrice + "*";

      sub4.append(sub5, price);

     sub3.append(select, sub4);

     div2.append(sub2, para, h3, sub3);

    

     contanier.append(div1, div2)

     box2.append(contanier);

     totalPrevValue += Number(el.oriPrice);

     totalCurValue += Number(el.curPrice);

   
 });

   console.log(totalCurValue);
     console.log(totalPrevValue);
}

showProducts()

let pre = document.getElementById('ori');

pre.textContent = "Rs. " + totalPrevValue;
pre.style.textDecoration = "line-through";
pre.style.fontSize = "15px";

let updated = document.getElementById('cur');

updated.textContent = "Rs. " + totalCurValue;
updated.style.fontSize = "15px";

let amountToPay = document.getElementById('bill');
amountToPay.textContent = "Rs. " + totalCurValue;

let saved = document.getElementById('saved');

saved.textContent = "Rs. " + (totalPrevValue - totalCurValue).toFixed(2) ;

let persentDiscount = document.getElementById('dis%');

persentDiscount.textContent = (((totalPrevValue - totalCurValue)/totalCurValue)*100).toFixed(2) + "%";

let disAmount = document.getElementById('disAmount');

disAmount.textContent = "Rs. " + (totalPrevValue - totalCurValue).toFixed(2) ;

let addAddress = document.getElementById('addAddress');

addAddress.onclick = function(){
  window.location.href = "checkout.html";
}

let date = document.getElementById('deliveryDate');

date.textContent =  (new Date().getDate()) + 6;

let address = JSON.parse(localStorage.getItem("address"));

let pincode = document.getElementById('pincode');
pincode.textContent = `(${address[0].pin})`;

let building = document.getElementById('building');
building.textContent = `${address[0].building}, ${address[0].street}`;

