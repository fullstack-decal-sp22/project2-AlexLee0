let total = 0;
let strbuffer = "0";
let operator = "";
function calculations() {
    const intBuffer = parseInt(strbuffer);
    if (operator === "+") {
        total += intBuffer;
    }
    else if (operator === "-") {
        total -= intBuffer;
    } 
    else if (operator === "×") {
        total *= intBuffer;
    }
    else {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer = strbuffer + value;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        total = 0;
        strbuffer = "0";
    } else if (symbol === "=") {
        if (operator != "") {
            calculations();
            strbuffer = String(total);
        }
    }
    else if (symbol === "←") {
        if (parseInt(strbuffer) != total) {
            if (strbuffer.length == 1) strbuffer = "0";
            else strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        }
    } 
    else {
        const intBuffer = parseInt(strbuffer);
        if (total === 0) total = intBuffer;
        operator = symbol;
        strbuffer = "0";
    }
}

function setListeners() {
    let buttons = document.querySelectorAll(".buttons"); 
    for (item of buttons) {
        item.addEventListener("click", function(event) {
            buttonClicked(event.target.innerText);
        })
    }
}

setListeners();

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { 
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);   
    }
    document.querySelector(".result-screen").innerHTML = strbuffer;
}