function games() {
  console.log("games")
  var x = document.getElementById("about");
  var y = document.getElementById("game");
  var z = document.getElementById("main");


  z.style.display = "block";
  y.style.display = "block";
  x.style.display = "block";
}

function about() {
  console.log("about")
  var x = document.getElementById("main");
  var y = document.getElementById("game");
  var z = document.getElementById("about");


  z.style.display = "block";
  y.style.display = "none";
  x.style.display = "none";
}

function main() {
  console.log("main")
  var x = document.getElementById("about");
  var y = document.getElementById("game");
  var z = document.getElementById("main");


  z.style.display = "block";
  y.style.display = "none";
  x.style.display = "none";
}


function block(name) {
  
}

function test(name) {
  console.log(name);
  var visible = document.getElementById(name);
  var hidden = document.getElementsByClassName("tab")

  for (const i of hidden) {
    if (i.id != name) {
      i.style.display = "none";
      console.log(i.id);
      //block(i.id);
    }
  }

  visible.style.display = "block";
}