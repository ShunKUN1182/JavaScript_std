const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const lists = document.querySelectorAll("#slider > li");
let counter = 1;
console.log(lists);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

nextBtn.addEventListener("click", () => {
    if (counter != lists.length) {
        counter++;
    } else {
        counter = 1;
    }
    console.log(counter);
});

prevBtn.addEventListener("click", () => {
    if (counter != 1) {
        counter--;
    } else {
        counter = lists.length;
    }
    console.log(counter);
});
