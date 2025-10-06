console.log(document);

console.dir(document);

document.title = "Hello JavaScript world";

// HTMLタグを探す

console.dir(document.querySelector("h1"))

document.body.style.backgroundColor = "#CCC";

//#logo

console.dir(document.querySelector("#logo"));

// ID名global_naviの中のliを探す

console.log(document.querySelector("#global_navi > li"));

document.querySelector("#global_navi li").style.color = "blue";
document.querySelector("#global_navi li").style.borderBottom = "solid 1px blue";
