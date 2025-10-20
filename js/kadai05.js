const blanks = document.querySelectorAll(".blank");
console.log(blanks);


blanks.forEach(e =>{
    e.addEventListener("click" , ()=>{
        e.target = "_blank";
    })
})

