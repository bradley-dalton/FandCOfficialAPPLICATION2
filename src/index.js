var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel__images");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function openBio(evt, bioName) {
  var i, content, links;

  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(bioName).style.display = "block";
  evt.currentTarget.className += " active";
}

//function greet(){
//    alert ("Welcome!");
//}

var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}
