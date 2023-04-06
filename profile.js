  function loadSongs() {

    //making an array to hold our songs
    let songs = [];

    //getting the text from local storage
    const songsText = localStorage.getItem('profSongs');

    //if there is text (there are profile songs), then making songs array parse songs text
    if (songsText) {
      songs = JSON.parse(songsText);
    }
  
    //this is making the table body element equal to the table we already have in profile.html
    const tableBodyEl = document.querySelector('#songs');

      // check if tableBodyEl exists
  if (!tableBodyEl) {
    console.error('Table body element not found.');
    return;
  }

  
    //if there are somgs to add, here we add them
    if (songs.length) {
      for (const [i, song] of songs.entries()) {
        const singerTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
  
        singerTdEl.textContent = song.singer;
        titleTdEl.textContent = song.title;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(singerTdEl);
        rowEl.appendChild(titleTdEl);
  
        //error: cannot read property of null
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=2>No songs yet!</td></tr>'; //this didn't post :(
    }

    //here, we upload username and password to display
    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");

    // Get the values of "userName" and "password" from localStorage
    const username = localStorage.getItem("userName");
    const password = localStorage.getItem("password");

    // Set the values of the username and password elements
    usernameElement.innerText = username;
    passwordElement.innerText = password;
  }
  
loadSongs();