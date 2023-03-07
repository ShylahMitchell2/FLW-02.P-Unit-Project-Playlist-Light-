// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let displayImage = document.querySelector(".display-image");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayLink = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// let pics = ["https://images.genius.com/d4938e7b54057e1ff666576ba5d670ab.264x264x1.jpg", "https://images.genius.com/d4938e7b54057e1ff666576ba5d670ab.264x264x1.jpg", "https://i.ytimg.com/vi/N2LPTvuIQ5U/maxresdefault.jpg", "https://assets.audiomack.com/hertseh/1cf2e7f74f1e7d2607885f34188af59b5883f74dcea4384a8d92319c8a075b34.jpeg?width=1000&height=1000&max=true", "https://images.genius.com/cb9236bdb4942210719dc3cce0d4dfa2.1000x1000x1.png"];

// let songNames = ["Low", "Kill Bill", "Up", "Boom", "Said Sum"];

// let artistsNames = ["SZA", "SZA", "Cardi B", "Doja Cat", "MoneyBagg Yo, City Girls, and DaBaby"];

// let songLinks = ["https://www.youtube.com/watch?v=Z-T_O_vl-8Y", "https://www.youtube.com/watch?v=SQnc1QibapQ", "https://www.youtube.com/watch?v=rCiBgLOcuKU", "https://www.youtube.com/watch?v=_z1-2KL7L8Y", "https://www.youtube.com/watch?v=UDRnXJXKX-A"];




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let song1 = {
  imageUrl: "https://images.genius.com/d4938e7b54057e1ff666576ba5d670ab.264x264x1.jpg",
  songName: "Low",
  artistName: "SZA",
  songLink:"https://www.youtube.com/watch?v=Z-T_O_vl-8Y"
};

let song2 = {
  imageUrl: "https://images.genius.com/d4938e7b54057e1ff666576ba5d670ab.264x264x1.jpg",
  songName: "Kill Bill",
  artistName: "SZA",
  songLink:"https://www.youtube.com/watch?v=SQnc1QibapQ"
};

let song3 = {
  imageUrl: "https://i.ytimg.com/vi/N2LPTvuIQ5U/maxresdefault.jpg",
  songName: "Up",
  artistName: "Cardi B",
  songLink:"https://www.youtube.com/watch?v=rCiBgLOcuKU"
};

let song4 = {
imageUrl:"https://assets.audiomack.com/hertseh/1cf2e7f74f1e7d2607885f34188af59b5883f74dcea4384a8d92319c8a075b34.jpeg?width=1000&height=1000&max=true" ,
  songName: "Boom",
  artistName: "Doja Cat",
  songLink: "https://www.youtube.com/watch?v=_z1-2KL7L8Y"
};

let song5 = {
  imageUrl: "https://images.genius.com/cb9236bdb4942210719dc3cce0d4dfa2.1000x1000x1.png",
  songName: "Saind Sum",
  artistName: "MoneyBagg Yo, City Girls, and DaBaby",
  songLink:"https://www.youtube.com/watch?v=UDRnXJXKX-A"
};

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let songs = [song1, song2, song3, song4, song5];



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.
  // songs.forEach(function(song) {
  //   displayImage.insertAdjacentHTML("beforeend",
  //     `<p><img src=${song.imageUrl}></p>`)
    
  //   displaySong.insertAdjacentHTML("beforeend",
  //     `<p> ${song.songName} </p>`)
    
  //   displayArtist.insertAdjacentHTML("beforeend",
  //     `<p> ${song.artistName} </p>`)
    
  //   displayLink.insertAdjacentHTML("beforeend",
  //     `<a href> ${song.songLink} </a>`)
  // })




function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let picInput = image.value;
  let songInput = songName.value;
  let artistInput = artist.value;
  let linkInput = songLink.value;


  // task 10: use `.push()` to add each input value to the correct array.
  // pics.push(picInput);
  // songNames.push(songInput); 
  // artistsNames.push(artistInput); 
  // songLinks.push(linkInput);
  // console.log(pics);
  
  let newSong = {
    imageUrl: picInput,
    songName: songInput,
    artistName: artistInput,
    songLink: linkInput
  };
    songs.push(newSong);

}



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
songs.forEach(function(song) {
    displayImage.insertAdjacentHTML("beforeend",
      `<p><img src=${song.imageUrl}></p>`)
    
    displaySong.insertAdjacentHTML("beforeend",
      `<p> ${song.songName} </p>`)
    
    displayArtist.insertAdjacentHTML("beforeend",
      `<p> ${song.artistName} </p>`)
    
    displayLink.insertAdjacentHTML("beforeend",
      `<a href=${song.songLink}>Song Link</a>`)
  })
};

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
