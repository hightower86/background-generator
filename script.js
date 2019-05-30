var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var col1 = document.getElementById('color1');
var col2 = document.getElementById('color2');

col1.value = '#ff0000';
col2.value = '#ffff00';
css.textContent = body.style.background; 

function changeColor() {
  body.style.background = 
      "linear-gradient(to right, "
      + color1.value
      + ", " 
      + color2.value 
      + ")";
  css.textContent = body.style.background + ";";    
}

changeColor();