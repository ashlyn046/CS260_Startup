//UPDATED!!!

async function loadSongs() {
  let songs = [];
  try {

    // Get the latest songs from the service
    //This line sends a fetch request to the /api/scores endpoint. The await keyword is used to wait for 
    //the response to come back before continuing to the next line.
    const response = await fetch('/api/songs');
    songs = await response.json();

    // Save the songs in case we go offline in the future
    localStorage.setItem('songs', JSON.stringify(songs));
  } catch {
    // If there was an error then just use the last saved scores
    const songsText = localStorage.getItem('songs');
    if (songsText) {
      songs = JSON.parse(songsText);
    }
  }

  displaySongs(songs);
}



function displaySongs(songs) {
    //this is making the table body element equal to the table we already have in profile.html
    const tableBodyEl = document.querySelector('#songs');

    //if there are songs to display
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