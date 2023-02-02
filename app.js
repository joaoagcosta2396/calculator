let currentValue = '';
let previousValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previousScreen");
    let currentScreen = document.querySelector(".currentScreen")

    numbers.forEach(function(e){
        e.addEventListener("click", function(){
            currentNumber = numbers;
            currentScreen.textContent = currentNumber;
        })
    })

    
    
    
})



// aritmetical operations
function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if (num2 === 0){
        return "Infinity";
    }else{
        return num1/num2;
    }

}
// function to call operations
function operate(op, num1, num2){

    switch(op){
        case "+": return add(num1, num2); 
        case "-": return subtract(num1, num2); 
        case "x":  return multiply(num1, num2);
        case "/":  return divide(num1, num2); 
        default: return 0;
    }
}