const  inputNumber = document.getElementById("input-number")
const btn =document.querySelector("button")
const length = document.querySelector("#length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")




 btn.addEventListener("click",function(){
        lengthMeter()
        volumeMeter()
        massMeter()
        
        
    })

function lengthMeter(){
   let meter  = inputNumber.value
   let feet = inputNumber.value
   meter *= 3.281
   feet *=0.3048
   length.textContent = `${inputNumber.value} meters = ${meter.toFixed(2)} | ${inputNumber.value} = ${feet.toFixed(3)} meters`
}



function volumeMeter(){
    let liter = inputNumber.value
    let gallon = inputNumber.value
    liter *=0.264 
    gallon *=3.78541
    volume.textContent = `${inputNumber.value} liters = ${liter.toFixed(3)} | ${inputNumber.value} gallons = ${gallon.toFixed(3)} liters`
}

function massMeter(){
    let kilos = inputNumber.value
    let pounds =inputNumber.value
    kilos*=2.204
    pounds *=0.453592 
    mass.textContent = `${inputNumber.value} kilos = ${kilos.toFixed(3)} pounds | ${inputNumber.value} pounds = ${pounds.toFixed(3)} kilos`
}



