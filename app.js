let operator = '';
let store_op = '';
let currentValue = '';
let previousValue = '';
let storedValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let displayResult = document.querySelector("#display");
    

   
    numbers.forEach((number) => number.addEventListener('click', function(e){
        currentValue += e.target.textContent;
        displayResult.textContent = currentValue;
        
      
        
    }))


    operators.forEach((operator) => operator.addEventListener('click', function(e){
        operator = e.target.textContent;

        // store current Value
        // check first if there is any valued stored in memory
        if(storedValue != ''){
            storedValue = Number(storedValue);
            store_op = operator;
            displayResult.textContent = operate(store_op, storedValue, storedValue).toString();
        }else{
            previousValue = currentValue;
            store_op = operator;
            currentValue = '';
        }

    
    }))


    equal.addEventListener('click', function(){

        //display result after hitting equals button and store the end result
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);
        console.log (previousValue, store_op, currentValue);
        console.log(operate(store_op,previousValue, currentValue));
    
        displayResult.textContent = operate(store_op, previousValue, currentValue).toString();
        storedValue = operate(store_op,previousValue, currentValue);
        console.log("On storage: ", storedValue);
        previousValue = previousValue.toString();
        currentValue = currentValue.toString();
        previousValue = '';
        currentValue = '';
        
    })
    

    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        storedValue = '';
        displayResult.textContent = currentValue;
       
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