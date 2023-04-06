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

    //FIX:: i added this and it stopped working lol
    friendsSongs.push({
      singer: singerEl.value,
      title: titleEl.value,
      user: "NA" //fix! i dont have users yet
    })
  
    localStorage.setItem("profSongs", JSON.stringify(profSongs));
    alert("Song shared successfully!");
    //singerEl.value = "";  CHANGED fix
    //titleEl.value = "";

    //ADDED FIX
    localStorage.setItem("friendsSongs", JSON.stringify(friendsSongs));
    singerEl.value = "";
    titleEl.value = "";

    profSongs.forEach(song => {
        console.log(`Name: ${song.singer}, Title: ${song.title}`);
      });

    //ADDED FIX!!!
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