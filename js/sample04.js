// 変数を作成する
let variable_1;
variable_1 = "JavaScript";
let pickupText = document.querySelector("h1");
let variable_2 = "変数と定数";
let todayDate = new Date;
const dateText = document.querySelector("#date");
let numA = document.querySelector("#numA");
let numB = document.querySelector("#numB");
let result = document.querySelector("#result");
let btn = document.querySelector("#btn");
let operator = document.querySelector("#operator");

console.log(variable_1);
console.log(variable_1);
document.title = variable_1
console.log(todayDate);

dateText.textContent = `${todayDate.getFullYear()}年${todayDate.getMonth() + 1}月${todayDate.getDay()}日${todayDate.getHours()}時${todayDate.getMinutes()}分`

btn.addEventListener("click" , ()=>{
    if (operator.value === "+") {
        result.value = Number(numA.value) + Number(numB.value);
    }else if (operator.value === "-") {
        result.value = Number(numA.value) - Number(numB.value);
    }else if (operator.value === "*") {
        result.value = Number(numA.value) * Number(numB.value);
    }else if (operator.value === "/") {
        result.value = Number(numA.value) / Number(numB.value);
    }else{
        alert("error");
    }
});


const btns = document.querySelectorAll(".btn");
const resultText = document.querySelector("#resultText");

btns.forEach(e=>{
    e.addEventListener("click" , ()=>{
        if (e.textContent === "=") {
            resultText.value = eval(resultText.value)
        }else if(e.textContent === "C"){
            resultText.value = "";
        }else{
            resultText.value += e.textContent;
        }
    })
})


