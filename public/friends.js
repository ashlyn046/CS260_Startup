//in the end, this page will have your posts and your friends' posts, but for now if just has your posts
function loadSongs() {

    //making an array to hold our songs
    let songs = [];

    //getting the text from local storage
    const songsText = localStorage.getItem('friendsSongs');

    //if there is text (there are profile songs), then making songs array parse songs text
    if (songsText) {
      songs = JSON.parse(songsText);
    }
  
    //this is making the table body element equal to the table we already have in friends.html
    const tableBodyEl = document.querySelector('#songs');

      // check if tableBodyEl exists
  if (!tableBodyEl) {
    console.error('Table body element not found.');
    return;
  }

  
    //if there are somgs to add, here we add them
    if (songs.length) {
      for (const [i, song] of songs.entries()) {
        const userTdEl = document.createElement('td');
        const singerTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
  
        //this is where we actually extract the user and song, we will have to add these !!! (at least the user)
        userTdEl.textContent = song.user; //FIXXX this doesn't exist yet
        singerTdEl.textContent = song.singer;
        titleTdEl.textContent = song.title;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(userTdEl);
        rowEl.appendChild(singerTdEl);
        rowEl.appendChild(titleTdEl);
  
        //error: cannot read property of null
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=2>No songs yet!</td></tr>'; //this didn't post :(
    }
  }
  
loadSongs();