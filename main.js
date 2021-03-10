let number;
let operator;
let res;
let DelLen;
let Del;

function show(event) {
    if (mainDiv.innerHTML == "+" ||mainDiv.innerHTML == "-" ||mainDiv.innerHTML == "*" ||mainDiv.innerHTML == "/") {
        mainDiv.innerHTML = "";
    }
    Number(mainDiv.innerHTML += event.target.value);
}

function operatorBtn(event) {
    number = mainDiv.innerHTML;
    mainDiv.innerHTML = event.target.value;
    operator = mainDiv.innerHTML;
}

function cal() {
    if (operator === "+") {
        res = Number(number) + Number(mainDiv.innerHTML);
    }
    else if (operator === "-") {
        res = Number(number) - Number(mainDiv.innerHTML);
    }
    else if (operator === "*") {
        res = Number(number) * Number(mainDiv.innerHTML);
    }
    else if (operator === "/") {
        res = Number(number) / Number(mainDiv.innerHTML);
    }
    mainDiv.innerHTML = Number(res);
}

function del(){
    mainDiv.innerHTML = "";
}

function delOneNumber(){
    DelLen = mainDiv.innerHTML.length;
    // Del = mainDiv.innerHTML;

    mainDiv.innerHTML = mainDiv.innerHTML.substr(0 , DelLen-1);

}

