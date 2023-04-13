function share() {
    //this block works
    const singerEl = document.querySelector("#singer");
    const titleEl = document.querySelector("#title");

    //this makes profsongs equal to the old list of songs
    const profSongs = JSON.parse(localStorage.getItem("profSongs")) || [];
    const friendsSongs = JSON.parse(localStorage.getItem("friendsSongs")) || [];

    //this pushed on the next song
    profSongs.push({
      singer: singerEl.value,
      title: titleEl.value,
    });

    //this pushed on the next song
    friendsSongs.push({
      singer: singerEl.value,
      title: titleEl.value,
      user: localStorage.getItem("userName")
    })
  
    //setting the songs in local storage
    localStorage.setItem("profSongs", JSON.stringify(profSongs));
    alert("Song shared successfully!");

    localStorage.setItem("friendsSongs", JSON.stringify(friendsSongs));
    singerEl.value = "";
    titleEl.value = "";

    //logging the namesand titles of each song
    profSongs.forEach(song => {
        console.log(`Name: ${song.singer}, Title: ${song.title}`);
      });

    friendsSongs.forEach(song => {
      console.log(`User: ${"NA"}, Name: ${song.singer}, Title: ${song.title}`);
    });

    //changes browser window to show profile.html
    window.location.href = "profile.html";

  }

  window.onload = function() {
    const shareButton = document.querySelector("#share");
    shareButton.addEventListener("click", share);
  }