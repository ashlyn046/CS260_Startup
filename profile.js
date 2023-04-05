  function loadSongs() {
    alert("in load");

    //making an array to hold our songs
    let songs = [];

    //getting the text from local storage
    const songsText = localStorage.getItem('profSongs');

    //if there is text (there are profile songs), then making songs array parse songs text
    if (songsText) {
        alert("in songsText is not empty");
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
        alert("songs length was not empty");
      for (const [i, song] of songs.entries()) {
        const singerTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
  
        singerTdEl.textContent = song.singer;
        titleTdEl.textContent = song.title;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(singerTdEl);
        rowEl.appendChild(titleTdEl);

        alert(rowEl);
  
        //error: cannot read property of null
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=2>No songs yet!</td></tr>'; //this didn't post :(
    }
  }
  
loadSongs();