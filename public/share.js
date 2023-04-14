async function share() {

  //getting singer and title elements
  const singerEl = document.querySelector("#singer");
  const titleEl = document.querySelector("#title");

    //now doing the api stuff
  const newSong = {singer: singerEl.value, title: titleEl.value, user: localStorage.getItem("userName")};
  try {
    //here, we set response to whatever we get back from this call, which will be songs with our new song added
    const response = await fetch('/api/song', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newSong),
    });

    // Store what the service gave us in local storage
    const songs = await response.json();
    localStorage.setItem('profSongs', JSON.stringify(songs));
  } catch {
    // If there was an error then just track scores locally
    this.updateSongsLocal(newSong);
  }

  window.location.href = "profile.html";

}

function updateSongsLocal(){
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
 
    localStorage.setItem("friendsSongs", JSON.stringify(friendsSongs));
    singerEl.value = "";
    titleEl.value = "";
}


function displayPicture() {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;

      const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', imgUrl);
      containerEl.appendChild(imgEl);
    });
}

window.onload = function() {
  alert("new 1");
  displayPicture();
  const shareButton = document.querySelector("#share");
  shareButton.addEventListener("click", share);
}