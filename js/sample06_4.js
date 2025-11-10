const txtElems = document.querySelectorAll(".txt");

console.log(txtElems);

// txtElems[0].addEventListener("mouseover" , (event)=>{
//     console.log(event.target);
// })

// txtElems.forEach(e => {
//     e.addEventListener("mouseover" , (eve)=>{
//         console.log(eve.target);
//     })
// });

for (let i = 0; i < txtElems.length; i++) {
    txtElems[i].addEventListener("mouseover" , (event)=>{
        console.log(event.target);
        event.target.style.color = "pink";
    })
    txtElems[i].addEventListener("mouseout" , (event)=>{
        event.target.style.color = "#000"
    })
}