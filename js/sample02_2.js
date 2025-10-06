// document.body.style.backgroundImage = "linear-gradient(角度,色１,色２)";
document.body.style.backgroundImage = "linear-gradient(45deg,#0AF,#000)";


const inputColor1 = document.querySelector("#inputColor1");
const inputColor2 = document.querySelector("#inputColor2");
const btn = document.querySelector("button");

const selectColor = document.querySelector("#textColor");

// inputColor.addEventListener("change" , ()=>{
//     document.body.style.backgroundColor = inputColor.value;
// });

btn.onclick = ()=>{
    document.body.style.backgroundImage = `linear-gradient(45deg , ${inputColor1.value} , ${inputColor2.value})`;
    selectColor.textContent = `${inputColor01.value}から${inputColor2.value}のグラデーション`;
};

