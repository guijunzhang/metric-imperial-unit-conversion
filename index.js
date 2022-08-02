/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("value")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length")
const volumeP = document.getElementById("volume")
const massP = document.getElementById("mass")
const mFtRatio = 3.281;
const lGalRatio = 0.264;
const kLbRatio = 2.204;

function calc() {
    const value = document.getElementById("value").value
    lengthP.innerText = `
        ${value} meters = ${(value * mFtRatio).toFixed(3)} feet | ${value} feet = ${(value / mFtRatio).toFixed(3)} meters
    `
    volumeP.innerText = `
        ${value} liters = ${(value * lGalRatio).toFixed(3)} gallons | ${value} gallons = ${(value / lGalRatio).toFixed(3)} liters
    `
    massP.innerText = `
    ${value} kilograms = ${(value * kLbRatio).toFixed(3)} pounds | ${value} pounds = ${(value / kLbRatio).toFixed(3)} kilograms
    `
}

input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        calc()
    }
});