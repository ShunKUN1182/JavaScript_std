const result = document.querySelector("#resultText");
const btn = document.querySelector("#btn");
let price = document.querySelector("#taxNum");

const tax = 0.1;

btn.addEventListener("click" , ()=>{
    price = parseInt(price.value)    
    let taxPrice = price * tax;    
    let totalPrice = taxPrice + price;
    result.textContent = totalPrice;
})
