//called automatically
(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName'); //gets the username if it was already in storage
  if (userName) {
    const nameEl = document.querySelector('#userName'); //this fills the html with the username from storage
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;

    if(user===undefined){
      authenticated = false;
    }
  }

  if (authenticated) {
    alert("authenticated");
    window.location.href = "friends.html";
  } else {
    //alert("User not in db");
  }
})();

async function loginUser() {
  debugger
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  debugger
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ username: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  debugger
  const body = await response.json();
  debugger
  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'friends.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
  let songs = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}
   window.onload = function() {
     const loginButton = document.querySelector("#login");
     loginButton.addEventListener("click", loginUser);
   }


//OLD CODE
// function login() {
//     event.preventDefault();
//     const nameEl = document.querySelector("#username");
//     const passwordEl = document.querySelector("#password");
//     localStorage.setItem("userName", nameEl.value);
//     localStorage.setItem("password", passwordEl.value);
//     window.location.href = "friends.html";
//   }
  
//   window.onload = function() {
//     const loginButton = document.querySelector("#login");
//     loginButton.addEventListener("click", login);
//   }



  //if you need to edit inside javascript, add js at the bottom of html. if you need js to run first, then put it in the head