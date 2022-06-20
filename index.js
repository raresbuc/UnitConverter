/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let myUnits = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputBtn.addEventListener("click", function(){
    myUnits.push(inputEl.value)
    render(myUnits)
    myUnits = []
})

function render(units) {
    let length = ""
    let volume = ""
    let mass = ""
    
    let lengthUnits = (myUnits * 3.281).toFixed(2)
    let volumeUnits = (myUnits * 0.264).toFixed(2)
    let massUnits = (myUnits * 2.204).toFixed(2)
    
    length = `
        <p id='length'>
        ${units} meters = ${lengthUnits} feet |
        </p>
    `
    
    volume = `
        <p id='length'>
        ${units} liters = ${volumeUnits} gallons |
        </p>
    `
    mass = `
        <p id='length'>
        ${units} kilos = ${massUnits} pounds |
        </p>
    `
    lengthEl.innerHTML = length
    volumeEl.innerHTML = volume
    massEl.innerHTML = mass
}