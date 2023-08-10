const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const unitLEl = document.getElementById("unitL-el");
const unitVEl = document.getElementById("unitV-el");
const unitMEl = document.getElementById("unitM-el");

btnEl.addEventListener("click", function(){
    let number = parseInt(inputEl.value);
    if(number){
        unitLEl.textContent = `${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters`;
        unitVEl.textContent = `${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters`;
        unitMEl.textContent = `${number} kilos = ${(number * 2.204).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos`;
    } else {
        unitLEl.textContent = `El valor ingresado no es un número`;
        unitVEl.textContent = `El valor ingresado no es un número`;
        unitMEl.textContent = `El valor ingresado no es un número`;
    }
    
})

btnEl.addEventListener("input", function(){
    const inputValue = this.value;
    if (inputValue.length > 2) {
    this.value = inputValue.slice(0, 2);
    }
})