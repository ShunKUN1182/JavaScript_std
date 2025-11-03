// 今回は多重forループを作っていくぜ

const table = document.querySelector("tbody");

// for (let i = 0; i < 9; i++) {
//     table.innerHTML += `<tr><th>${i+1}</th>`
//     for (let j = 0; j < 9; j++) {
//         table.innerHTML += `<td>${j*i+1}</td>`
//     }
//     table.innerHTML += `</tr>`
// }

// for (let i = 0; i < 9; i++) {
//     table.insertAdjacentHTML("beforeend" , `<tr>
//         <th>${i+1}</th>`);
//             for (let j = 0; j < 9; j++) {
//                 table.insertAdjacentHTML("beforeend" , `<td>${(i+1) * (j+1)}</td>`)
//             };
//         table.insertAdjacentHTML("beforeend" , `</tr>`);
// }

for (let i = 0; i < 9; i++) {
    let row = `<tr>`
    for (let j = 0; j < 9; j++) {
        if (j == 0) {
            row += `<th>${(i + 1) * (j + 1)}</th>`;
        }else if(i == 0){
            row += `<th>${(i + 1) * (j + 1)}</th>`;
        }else{
            row += `<td>${(i + 1) * (j + 1)}</td>`;
        }
    };
    row += `<tr>`
    table.insertAdjacentHTML("beforeend" , row)
}