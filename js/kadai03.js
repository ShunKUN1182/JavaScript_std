const clientX = document.querySelector("#client-x");
const clientY = document.querySelector("#client-y");
const screenX = document.querySelector("#screen-x");
const screenY = document.querySelector("#screen-y");
const globalX = document.querySelector("#global-x");
const globalY = document.querySelector("#global-y");

console.log(clientX.value);


document.addEventListener("mousemove" , function(event){
    clientX.value = event.clientX;
    clientY.value = event.clientY;
    screenX.value = event.screenX;
    screenY.value = event.screenY;
    globalX.value = document.documentElement.scrollTop + event.clientY;
    globalY.value = document.documentElement.scrollLeft + event.clientX;
});

