const links = document.querySelectorAll(".wrapper > ul > li > a");

console.log(links);

links.forEach((e) => {
    e.target = "blank";
});
