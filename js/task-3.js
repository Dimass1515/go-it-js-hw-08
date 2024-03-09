const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener('input', yourName);


function yourName() {
    const enteredName = input.value.trim();
        
    
    output.textContent = enteredName || "Anonymous";
}