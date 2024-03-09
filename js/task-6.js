function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector("#boxes")
const controls = document.querySelector("#controls")
const create = document.querySelector("[data-create]")
const destroy = document.querySelector("[data-destroy]")
const numberInput = document.querySelector("input")



destroy.addEventListener("click", () => {
  numberInput.value = "";    
  boxes.innerHTML = "";   
  
 });



let newDiv;
let boxSize;

function createBoxes(amount){
boxSize = 30; 
boxes.innerHTML = "";

    for (let i = 1; i <= amount; i += 1) {
      newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML("beforeend", newDiv);

  boxSize += 10;
 }

}

create.addEventListener("click", () => {
  numberInput.focus();
  if (numberInput.value > 0 && numberInput.value <100) {     
    createBoxes(numberInput.value);
    numberInput.value = '';
  }else{
    alert('Please enter a number between 1 and 100')    
  } 
  
});
