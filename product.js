let product = JSON.parse(localStorage.getItem("product"));

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

let title = document.getElementById('title');

title.textContent = "Buy "+product[0].name;

let name = document.getElementById('name');

name.textContent = product[0].name;

let img = document.getElementById('img');

img.src =  product[0].img;

let imgs = document.querySelectorAll('.inImg');

imgs.forEach(function(el){
    el.src = product[0].img;
})

let price = document.getElementById('price');
price.textContent = 'MRP Rs. '+ product[0].curPrice;

let heading = document.getElementById('heading');

heading.textContent = product[0].name;

let  addBtn = document.getElementById('AddCart');

addBtn.onclick = function(){
    add();
}
function add(){
    let select = document.getElementById('select');
    addBtn.textContent = "";

    let select1 = document.createElement("select");
    let option1 = document.createElement("option");
    option1.textContent = "Qty.";
    let option2 = document.createElement("option");
    option2.textContent = 1;
    let option3 = document.createElement("option");
    option3.textContent = 2;
    let option4 = document.createElement("option");
    option4.textContent = 3;
    let remove = document.createElement("option");
    remove.textContent = "Remove Item";

    
    select1.append(option1, option2, option3, option4, remove);
    
    addBtn.append(select1);

    addBtn.style.backgroundColor = "white"
    
   let options = document.getElementsByTagName('option');

  addBtn.onclick = function(e){
     preventDefault();
  }
  

  select1.onchange = function(){
      if(select1.value == 1){
          product[0].qty = 1;
          localStorage.setItem("product",JSON.stringify(product));
           alert("Added to Your Cart");
           cartItems.push(product[0]);
           localStorage.setItem("cart", JSON.stringify(cartItems));
      }
        if(select1.value == 2){
          product[0].qty = 2;
          localStorage.setItem("product",JSON.stringify(product));
           alert("Added to Your Cart");
           cartItems.push(product[0]);
           localStorage.setItem("cart", JSON.stringify(cartItems));
      }
      if(select1.value == 3){
          product[0].qty = 3;
          localStorage.setItem("product",JSON.stringify(product));
          alert("Added to Your Cart");
          cartItems.push(product[0]);
           localStorage.setItem("cart", JSON.stringify(cartItems));
      }
      if(select1.value == "Remove Item"){
          product[0].qty = 0;
          localStorage.setItem("product",JSON.stringify(product));
          alert("Removed From Your Cart");
         
         
           cartItems.pop();

           localStorage.setItem("cart", JSON.stringify(cartItems));

          addBtn.textContent = "Add To Cart";
          addBtn.style.backgroundColor = "#4f585e";

           addBtn.style.color = "white";
  window.location.reload();
      }
  }

}
 
 let cartPart =document.getElementById('carts');

 cartPart.onclick = function(){
     window.location.href = "cart.html";
 }

let home = document.getElementById('home');

home.onclick = function(){
    window.location.href = "home.html";
}