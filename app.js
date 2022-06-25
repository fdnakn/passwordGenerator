const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol:getRandomSymbol

    //we will give a key to each function 
    //thesee keys equal whatever thesee functions return
}

generateEl.addEventListener("click",()=>{

    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    
   resultEl.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
   //generatePassword and it takes in all of this stuff 
})

function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword = ""
    //it will represent the password
    const typesCount = lower + upper + number + symbol 
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])
    //types count parametre olarak girdiklerimizi lower upper gibi
    //which is true  gibi , console log dersek typescount a kaç tane true var onu der
    if(typesCount===0){
        return ""
    }
    for(let i= 0; i<length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            generatedPassword +=randomFunc[funcName]();
        })
    }
    const finalPassword =generatedPassword.slice(0,length)

    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

