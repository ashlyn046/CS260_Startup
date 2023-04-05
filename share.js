function share() {
    //this block works
    const singerEl = document.querySelector("#singer");
    const titleEl = document.querySelector("#title");

    //this makes profsongs equal to the old list of songs
    const profSongs = JSON.parse(localStorage.getItem("profSongs")) || [];

    //this pushed on the next song
    profSongs.push({
      singer: singerEl.value,
      title: titleEl.value,
    });
  
    localStorage.setItem("profSongs", JSON.stringify(profSongs));
    alert("Song shared successfully!");
    singerEl.value = "";
    titleEl.value = "";

    profSongs.forEach(song => {
        console.log(`Name: ${song.singer}, Title: ${song.title}`);
      });

    window.location.href = "profile.html";
  }

  window.onload = function() {
    const shareButton = document.querySelector("#share");
    shareButton.addEventListener("click", share);
  }