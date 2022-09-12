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