function login() {
    event.preventDefault();
    const nameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "friends.html";
  }
  
  window.onload = function() {
    const loginButton = document.querySelector("#login");
    loginButton.addEventListener("click", login);
  }



  //if you need to edit inside javascript, add js at the bottom of html. if you need js to run first, then put it in the head