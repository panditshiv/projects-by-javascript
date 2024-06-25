let lengthSlider= document.querySelector('.slider')
let sliderValue= document.querySelector('.num')
let strength=document.querySelector('.strength-div')
lengthSlider.addEventListener('input',()=>{
    sliderValue.textContent=lengthSlider.value
    if(lengthSlider.value<3){
        strength.style.cssText="background-color:red"
    }
    else if(lengthSlider.value>=3 && lengthSlider.value<=7){
        strength.style.cssText="background-color:green"
    }
    else{
        strength.style.cssText="background-color:yellow"
    }

})

let generateButton= document.querySelector('.box-3-input')
let finalPassword=document.querySelector('.box-2-input')

generateButton.addEventListener('click',
    function () {
        let length = lengthSlider.value,
            uppercase = document.querySelector('#check0'),
            lowercase = document.querySelector('#check1'),
            symbol = document.querySelector('#check3'),
            numbers = document.querySelector('#check2'),
            gs = generatePassword(length, uppercase, lowercase, numbers, symbol)
        finalPassword["value"] = gs
    })
let string=""
function generatePassword(length,uppercase,lowercase,symbol,numbers){
    let charset=""

    if(uppercase.checked)
    {
        charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else{
        charset+=" "
    }
    if(lowercase.checked)
    {
        charset+="abcdefghijklmnopqrstuvwxyz"
    }
    else{
        charset+=" "
    }
    if(numbers.checked)
    {
        charset+="!@#$%^&*()_+{}:?/.,<>|``"
    }
    else{
        charset+=" "
    }
    if(symbol.checked)
    {
        charset+="123456789"
    }
    else{
        charset+=" "
    }


    for (let i=1;i<=length;i++){
        string+=charset.charAt(Math.floor(Math.random()*charset.length))
    }

    return string;
}
let outer=document.querySelector("#out")

let copy= document.querySelector(".box-2-img")
copy.addEventListener('click', function(){
    console.log(navigator.clipboard.writeText( finalPassword["value"] ))
    if(string.length!==0){
        copy.style.cssText="z-index=-6"
        outer.style.cssText="z-index=5"
    }




})




