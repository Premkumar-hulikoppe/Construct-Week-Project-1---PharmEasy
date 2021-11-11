let select = document.getElementById('select');

let users =JSON.parse(localStorage.getItem("usersRegistered")) || [];

let name = document.getElementById('name').value;
let number = document.getElementById('number').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

select.addEventListener('submit', (e) => {
    e.preventDefault();
   
   let name = document.getElementById('name').value;
let number = document.getElementById('number').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
    

    let userData = {
        name:name,
        number:number,
        email:email,
        password:password
    }
    
    if(name == ""){
        alert("Please fill valid username");
    }else if(number == "" || number.length != 10){
         alert("Mobile Number Should consist 10 digits");
    }else if(email == ""){
         alert("Please fill valid email id");
    }else if(password == "" || password.length != 4){
         alert("Password Should Consists minimum 4 characters");
    }
    
    else{

    users.push(userData);
    localStorage.setItem("usersRegistered", JSON.stringify(users));
      
      window.location.href = "signin.html";
    }
});
