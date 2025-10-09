const backgroundColorText = document.getElementById("set-bg-txt");
const backgroundColorBtn = document.getElementById("box1-bg-btn");
const box1 = document.getElementById("box1")

const colorText = document.getElementById("set-color-txt");
const colorTextBtn = document.getElementById("box2-color-btn");
const box2 = document.getElementById("box2-text");

const fontSizeText = document.getElementById("set-font-size-txt");
const fontSizeBtn = document.getElementById("box3-font-size-btn");
const box3 = document.getElementById("box3-text");

const lineText = document.getElementById("set-border-txt");
const lineTextBtn = document.getElementById("box4-border-btn");
const box4 = document.getElementById("box4");


// console.log(backgroundColorBtn);


backgroundColorBtn.addEventListener("click" , ()=>{
    box1.style.backgroundColor = backgroundColorText.value;
});

colorTextBtn.addEventListener("click" , ()=>{
    box2.style.color = colorText.value;
});

fontSizeBtn.addEventListener("click" , ()=>{
    box3.style.fontSize = fontSizeText.value;
});

lineTextBtn.addEventListener("click" , ()=>{
    box4.style.border = lineText.value;
});


