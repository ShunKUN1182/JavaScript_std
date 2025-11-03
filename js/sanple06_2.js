let maxCount = 100;
let count = 0;
const tetWhile = document.querySelector("#tet_while");
const ECC = "ECC";
const tetFor = document.querySelector("#tet_for");

while (count <= maxCount) {
    tetWhile.textContent = count;
    count++;
}

// for (let i = 0; i < ECC.length; i++) {
//     tetFor.textContent += ECC[i]
// }

const teachers = [
    "滝本先生",
    "桃井先生",
    "田中先生",
    "坂倉先生",
    "宮崎先生",
    "武田先生",
    "渡辺先生",
    "福島先生",
    "坂口です",
    "細川大先生",
    "スーザン",
    "ジョシュア",
];

teachers.push("公平先生");

console.log(teachers);

for (let i = 0; i < teachers.length; i++) {
    tetFor.insertAdjacentHTML("beforeend", `${teachers[i]}<br>`);
}

let sakaguti = "こうへい";
console.log(`私の名前は${sakaguti}です`);
