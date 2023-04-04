  function loadSongs() {
    alert("in load");
    let songs = [];
    const songsText = localStorage.getItem('songs');
    if (songsText) {
        alert("in songsText is not empty");
      songs = JSON.parse(songsText);
    }
  
    const tableBodyEl = document.querySelector('#songs');
  
    if (songs.length) {
        alert("songs length was not empty");
      for (const [i, song] of songs.entries()) {
        alert("in for");
        const singerTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
  
        singerTdEl.textContent = song.singer;
        titleTdEl.textContent = song.title;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(singerTdEl);
        rowEl.appendChild(titleTdEl);

        alert(rowEl);
  
        //error: cannot read propertied of null
        tableBodyEl.appendChild(rowEl);
      }
    } else {
        alert("in else");
      tableBodyEl.innerHTML = '<tr><td colSpan=4>BNo songs yet!</td></tr>';
    }
  }
  
loadSongs();