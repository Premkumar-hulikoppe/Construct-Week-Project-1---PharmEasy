


let button = document.getElementById('save');

button.onclick = function(){
    let name = document.getElementById('name').value;
let mobile = document.getElementById('mobile').value;
let building = document.getElementById('building').value;
let street = document.getElementById('street').value;
let pin = document.getElementById('pin').value;

let addressType = document.querySelector('.radios').value; 
console.log(addressType);
    if(name == ""){
        alert("Please Enter Valid name");
    }else if(mobile == ""){
          alert("Please Enter Valid mobile number");
    }else if(mobile.toString().length != 10){
          alert("Mobile number should consist 10 digits");
    }else if(building == ""){
          alert("Please Enter Valid building name");
    }else if(street == ""){
          alert("Please Enter Valid street name");
    }else if(pin == ""){
          alert("Please Enter Valid pincode number");
    }else{

    let address = [];
    let details = {
        name: name,
        moblie: mobile,
        building: building,
        street: street,
        pin: pin,
        type:addressType
    };

    address.push(details);

    localStorage.setItem("address",JSON.stringify(address));

    window.location.href = "proceedToBuy.html";
}
    };