function loadSongs() {
    const songs = JSON.parse(localStorage.getItem("songs")) || [];
  
    const tableBodyEl = document.querySelector("#songs");
  
    if (songs.length) {
      for (const [i, song] of songs.entries()) {
        const positionTdEl = document.createElement("td");
        const singerTdEl = document.createElement("td");
        const titleTdEl = document.createElement("td");
  
        positionTdEl.textContent = i + 1;
        singerTdEl.textContent = song.singer;
        titleTdEl.textContent = song.title;
  
        const rowEl = document.createElement("tr");
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(singerTdEl);
        rowEl.appendChild(titleTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colspan=3>No songs shared yet</td></tr>';
    }
  }
  
  loadSongs();