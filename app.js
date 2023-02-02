let operator = '';
let currentNum = '';
let previousNum = '';

const previousDisplay = document.querySelector(".previousDisplay");
const currentDisplay = document.querySelector(".currentDisplay");




const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(currentNum != '' && previousNum != ''){
        operate();
    }
});


const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    addDecimal();
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', clearCalculator);



numbers.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleNumber(e.target.textContent)
    });
});


function handleNumber(number){
    if(previousNum !== '' && currentNum !== '' && operator === ""){
        previousNum = '';
        currentDisplay.textContent = currentNum;
    }
    if(currentNum.length <= 11){
        currentNum += number;
        currentDisplay.textContent = currentNum;
    }
    
}


operators.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleOperator(e.target.textContent)
    });
});


function handleOperator(op){
    
    if(previousNum === ""){
        previousNum = currentNum;
        operatorCheck(op)
    }else{
        if(currentNum  === ""){
            operatorCheck(op)
        }else{
            operate()
            operator = op;
            currentDisplay.textContent = "0";
            previousDisplay.textContent = previousNum + " " +  operator;
        }
    }
    
}

function operatorCheck(text){
    operator = text;
    previousDisplay.textContent = previousNum + " " +  operator;
    currentDisplay.textContent = '0';
    currentNum = "";

}



// function to call operations
function operate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === "+"){
        previousNum +=  currentNum;
    }else{
        if(operator === "-"){
            previousNum -=  currentNum;
        }else{
            if(operator === "x"){
                previousNum *= currentNum;
            }else{
                if(operator === "/"){
                    if(currentNum<=0){
                        previousNum = "Error"
                        displayResult();
                        return;
                    }
                    previousNum /= currentNum;
                }
            }
        }
    }
    previousNum = roundNumb(previousNum);
    previousNum = previousNum.toString();
    displayResult();

}

function roundNumb(num){
    return Math.round(num * 100000)/100000;
}

function displayResult(){
    
    
    if(previousNum.length <= 11){
        currentDisplay.textContent = previousNum;
    }else{
        currentDisplay.textContent = previousNum.slice(0,11) + "...";
    }
    previousDisplay.textContent = '';
    operator = '';
    currentNum = '';
}

function clearCalculator(){
    currentNum = "";
    previousNum = "";
    operator = "";

    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
}

function addDecimal(){
    if(!currentNum.includes('.')){
        currentNum += ".";
        currentDisplay.textContent = currentNum;
    }
}