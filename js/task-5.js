function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('.body');
  

let colorSet;

function changeColor(){
  colorSet = getRandomHexColor();

  document.body.style.backgroundColor = colorSet;
  document.querySelector('.color').textContent = colorSet;
}


  button.addEventListener("click", changeColor);