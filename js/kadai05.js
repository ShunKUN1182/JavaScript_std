const blanks = document.querySelectorAll(".blank");
console.log(blanks);


blanks.forEach(e =>{
    e.addEventListener("click" , function(event){
        event.preventDefault();
        window.open(e.href , "windowName");
    })
})