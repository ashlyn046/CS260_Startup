function share() {
    const singerEl = document.querySelector("#singer");
    const titleEl = document.querySelector("#title");
    const songs = JSON.parse(localStorage.getItem("songs")) || [];
  
    songs.push({
      singer: singerEl.value,
      title: titleEl.value,
    });
  
    localStorage.setItem("songs", JSON.stringify(songs));
    alert("Song shared successfully!");
    singerEl.value = "";
    titleEl.value = "";
  }