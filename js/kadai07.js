const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const lists = document.querySelectorAll("#slider > li");
let counter = 1;
let timer = 4000;
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
    lists.forEach((e) => {
        e.style.display = "none";
    });
    lists[counter - 1].style.display = "block";
});

prevBtn.addEventListener("click", () => {
    if (counter != 1) {
        counter--;
    } else {
        counter = lists.length;
    }
    console.log(counter);
    lists.forEach((e) => {
        e.style.display = "none";
    });
    lists[counter - 1].style.display = "block";
});

setInterval(() => {
    if (counter != lists.length) {
        counter++;
    } else {
        counter = 1;
    }
    lists.forEach((e) => {
        e.style.display = "none";
    });
    lists[counter - 1].style.display = "block";
}, timer);
