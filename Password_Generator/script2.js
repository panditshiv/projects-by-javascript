let lengthSlider= document.querySelector('.slider')
let sliderValue= document.querySelector('.num')
let strength= document.querySelector(".strength-div")
lengthSlider.addEventListener('input',()=>{
    sliderValue.textContent=lengthSlider.value

})
let password= document.querySelector('.box-2-input')
let generatePassword=document.querySelector('.box-3-input')
let uppercase=document.getElementById('#check-0')
let lowercase=document.getElementById('#check-1')
let numbers=document.getElementById('#check-2')
let symbols=document.getElementById('#check-3')
function checking(uppercase,lowercase,symbols,numbers) {
    if (uppercase.checked) {

    }
    if (lowercase.checked) {

    }
    if (symbols.checked) {

    }
    if (numbers.checked) {

    }
}
generatePassword.addEventListener('click',()=>{


})


function genPassword() {

    let charset=""
    let string=""
    if(uppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lowercase) charset+="abcdefghijklmnopqrstuvwxyz"
    if(symbols) charset+="!@#$%^&*()_+=-"
    if(numbers) charset+="123456789"
}

