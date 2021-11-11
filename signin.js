let select = document.getElementById('select');

let users =JSON.parse(localStorage.getItem("usersRegistered"));



select.addEventListener('submit', (e) => {
    e.preventDefault();
   
   let users =JSON.parse(localStorage.getItem("usersRegistered"));
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
    
    let count = 0;
    users.forEach(function(el){
        if(el.password == password && el.email == email){
            count++;
        }
    });
 
    if(count > 0){
        window.location.href = "home.html";
    }
   
    });