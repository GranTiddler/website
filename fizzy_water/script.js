var open = false;

function toggleNav() {
  if (open) { // if open, close the menu
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
    // lengthen the title box
    document.getElementById("title").style.width = "80vw";
    document.getElementById("title_ul").style.marginLeft = "40px";

    open = false;
  }
  else { // if closed, open the menu
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    
    // shorten the title box
    document.getElementById("title").style.width = "70vw";
    document.getElementById("title_ul").style.marginLeft = "20px";

    open = true;
  }
  // play windows start audio
  playAudio("hey");
}

// function to play audio
function playAudio(element) {
  var audio = document.getElementById(element);
  audio.play();
}