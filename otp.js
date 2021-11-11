
let btn = document.querySelector('button');

btn.onclick = function(){
let otp = document.getElementById('otp').value;

if(otp == ""){
    alert("Please enter otp");
}else if(otp != "860110"){
    alert("OTP is not valid");
}else if(otp == "860110"){

        localStorage.setItem("cart", JSON.stringify([]));
        
        window.location.href = "successful.html";
}

}