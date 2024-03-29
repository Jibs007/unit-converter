let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.querySelector(".length-el")
let volumeEl = document.querySelector(".volume-el")
let massEl = document.querySelector(".mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    const baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet |     ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`    
    
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / meterToFeet).toFixed(3)} liters`    
    
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds |     ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms`    
})