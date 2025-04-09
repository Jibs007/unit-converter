const numInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")


const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPounds = 2.204


convertBtn.addEventListener('click', function () {
    const baseValue = numInput.value
    lengthOutput.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`

    volumeOutput.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`

    massOutput.textContent = `${baseValue} kilos = ${(baseValue * kiloToPounds).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPounds).toFixed(3)} kilos`

})
