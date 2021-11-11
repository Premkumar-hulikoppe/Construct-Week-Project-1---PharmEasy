let shop  = document.getElementById('shop');

let logout = document.getElementById('logout');

shop.onclick = function(){
    window.location.href = "home.html";
}

logout.onclick = function(){
    console.log("HI");
    localStorage.removeItem("usersRegistered");
    window.location.href = "home.html";
}
