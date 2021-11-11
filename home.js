let container = document.getElementById('box10');

let products = JSON.parse(localStorage.getItem("data"));

let login = document.getElementById('loging');

login.addEventListener('click', (e) => {
    window.location.href = "signup.html";
});

let data = [
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000591/abzorb-anti-fungal-powder-100-gm-1-1634881708.jpg?dim=224x0&dpr=1&q=100",
        name:"Abzorb Anti Fungal Powder - 100 Gm",
        qty:"100g Powder in Bottle",
        oriPrice:135,
        curPrice:108
    },
     {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1632774668.jpg?dim=224x0&dpr=1&q=100",
        name:"Calcimax 500 Health Supplement Tablet..",
        qty:"30 tablets in strip",
        oriPrice:359,
        curPrice:280.2
    },
     {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1635055869.jpg?dim=224x0&dpr=0.8999999761581421&q=100",
        name:"Dettol Anticeptic Liquid Bottle of 55..",
        qty:"550g Liquid In Bottle",
        oriPrice:200,
        curPrice:164.6
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/266249/depura-60000-iu-vitamin-d3-oral-solution-helps-bones-healthy-aids-in-boosting-immunity-sugarfree-2-1632774372.jpg?dim=224x0&dpr=0.8999999761581421&q=100",
        name:"Depura, 60000 Iu vitamin D3 Tablets",
        qty:"5g Liquid In Bottle",
        oriPrice:94,
        curPrice:71
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1632774243.jpg?dim=224x0&dpr=0.8999999761581421&q=100",
        name:"Volini Pain Relief Gel Tube of 75gm",
        qty:"75g Gel In Tube",
        oriPrice:245,
        curPrice:208
    },
       {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1632775258.jpg?dim=224x0&dpr=0.8999999761581421&q=100",
        name:"Accu-Check Active Gluco meter Test Kit",
        qty:"50g test liquid",
        oriPrice:975,
        curPrice:809
    },
      {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170g-2-1635055868.jpg?dim=224x0&dpr=0.8999999761581421&q=100",
        name:"Savlon Surface Disinfictant Spray",
        qty:"170g spray in bottle",
        oriPrice:159,
        curPrice:149
    },
]

if(localStorage.setItem("data", JSON.stringify(data)) == null){
    localStorage.setItem("data", JSON.stringify(data));
}


displayItems(products);

function displayItems(products) {
    
    products.forEach(function(el){
        let subDiv = document.createElement("div");
 
        subDiv.addEventListener("click", checkSignup);

        function checkSignup(){
            if(JSON.parse(localStorage.getItem("usersRegistered") == null)){
                window.location.href = "signup.html";
            }else{
                let item = [];
                item.push(el);
                localStorage.setItem("product",JSON.stringify(item));
                window.location.href = "product.html";
            }
        }

        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        let name = document.createElement("h2");
        name.textContent = el.name;
        let qty = document.createElement("h3");
        qty.textContent = el.qty;
        let p1 = document.createElement("p");
        p1.textContent = "MRP. " + el.oriPrice;
         let p2 = document.createElement("p");
          p2.textContent = "Rs. " + el.curPrice;
           
          subDiv.setAttribute('class', "box10Items");
         imgDiv.setAttribute('class', "imdDiv");
         img.setAttribute('class', "img");
         imgDiv.append(img)
         subDiv.append(imgDiv, name, qty, p1, p2);
         name.setAttribute('class', "txt");
          name.setAttribute('class', "name");
         qty.setAttribute('class', "txt");
         container.append(subDiv);  
           qty.setAttribute('class', "qty");
         container.append(subDiv);  
         p1.setAttribute('class', "txt");
          container.append(subDiv);  
         p1.setAttribute('class', "p1");
         container.append(subDiv); 
         p2.setAttribute('class', "txt");
         container.append(subDiv); 
         p2.setAttribute('class', "p2");
         container.append(subDiv); 

    });
}

let slidingImages = [
    "https://cms-contents.pharmeasy.in/banner/53092e2c114-FREEDB.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/afc7a916c23-02.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/0331975d9d8-Dweb_nutrition.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/5b5db4bb8cb-HOMEPAGE_PL_Dwebb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/80bea445ee2-Ease_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/0ff77f182b8-UPDATEDKBCDWEB.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/b05e55fd55b-SUPR25_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/ff62f53c2ba-GRAND25DWEB.jpg?dim=1440x0&dpr=1&q=100"
];

let slideContainer = document.querySelector('.slideWrapper');

let index = 0;


    let img = document.createElement("img");

    img.src = slidingImages[index];

    img.style.maxWidth = "100%"
    img.style.height = "100%"

     slideContainer.append(img);

     index++;

setInterval("slide()", 2500);


function slide(){
    slideContainer.innerHTML = "";

    let img = document.createElement("img");

    img.src = slidingImages[index];

    img.style.maxWidth = "100%"
    img.style.height = "100%"

    index++;

    slideContainer.append(img);

    if(index >= slidingImages.length){
        index = 0;
    }
}

let timer = document.getElementById('timer');

var deadline = new Date("Nov 14, 2021 23:37:25").getTime();

var x = setInterval(function(){
 var now = new Date().getTime();
 var t = deadline - now;
 var days = Math.floor(t/(1000* 60 * 60 * 24));
 var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60))/ (1000 * 60));
var seconds = Math.floor((t % (1000 * 60))/ (1000));

timer.innerHTML = `${hours}:${minutes}:${seconds} left`;

if(t < 0){
    timer.innerHTML = `Offer Expired`;
}
}, 1000);




