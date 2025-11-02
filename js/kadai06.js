const imgs = document.querySelectorAll("img");

console.log(imgs);

imgs.forEach(e => {
    e.addEventListener("mouseover" , ()=>{
        e.classList.add("over");
    });

    e.addEventListener("mouseout" , ()=>{
        e.classList.remove("over");
    })
});