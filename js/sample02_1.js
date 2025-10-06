let text = document.querySelector("h1");
const pika = document.querySelector("h2");
let count = 0;
const btn = document.querySelector("#btnFontSize");
const inputText = document.querySelector("#inputText");

text.onmouseover = () =>{
    text.style.color = "tomato";
}

text.onmouseout = () =>{
    text.style.color = "#000";
};

setInterval(()=>{
    
    if (count == 0) {
        pika.style.color = "gold";
        count++;
    }else{
        pika.style.color = "canvastext";
        count = 0;
    }
},75);


btn.onclick = (()=>{
    if (inputText.value > 0) {
        text.style.fontSize = `${inputText.value}px`;
    }else{
        alert("有効な値が入力されていません");
    }
});