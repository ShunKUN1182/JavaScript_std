const h1 = document.querySelector("h1");
h1.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
        // あるとき trueのとき
        event.target.classList.remove("active");
    } else {
        // ないとき falseのとき
        event.target.classList.add("active");
    }
});
