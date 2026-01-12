//
// workbook-03.js
// 問題番号：15 ~ 19
// 各設問に対するプログラムを{}の中に実装しましょう。
//

const q15 = () => {
    // ----------------------------------------
    // 15. メッセージ表示の回数指定
    // ----------------------------------------
    console.log(`15. 数値を入力し、その値回数「 Hello World! 」をコンソールに表示する`);

    const loopNum = parseInt(prompt(`Q15. 表示する回数を入力`));
    for (let i = 0; i < loopNum; i++) {
        console.log("hello world!");
    }
};

const q16 = () => {
    // ----------------------------------------
    // 16. 終了ワードまで繰り返す
    // ----------------------------------------
    console.log(
        `16. キーワードを入力しコンソールに表示する\r\nもし、キーワードに「 end 」が入力されたら、キーワード入力を終了する`
    );

    let keyword = "";

    while (keyword != "end") {
        keyword = prompt(`Q16. キーワードを入力`);
    }
};

const q17 = () => {
    // ----------------------------------------
    // 17. FazzBazz
    // ----------------------------------------
    console.log(
        `17. 1 ~ 100までの値を繰り返しコンソールに表示する。\r\nもし、値が3の倍数の時は「 Fazz 」と表示し、\r\n5の倍数の時は「 Bazz 」と表示し、\r\n3と5の倍数の時は「FazzBazz」と表示する。`
    );

    for (let j = 1; j < 101; j++) {
        if (j % 3 == 0 && j % 5 == 0) {
            console.log("fuzzbuzz");
        } else if (j % 3 == 0) {
            console.log("fuzz");
        } else if (j % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(j);
        }
    }
};

const q18 = () => {
    // ----------------------------------------
    // 18. 九九の表
    // ----------------------------------------
    console.log(`18. 九九の表をコンソールに表示する`);
    let inputNum = "";
    for (let k = 1; k < 10; k++) {
        for (let l = 1; l < 10; l++) {
            inputNum += `${k * l}   `;
        }
        console.log(inputNum);
        inputNum = "";
    }
};

const q19 = () => {
    // ----------------------------------------
    // 19. 基数変換
    // ----------------------------------------
    console.log(`19. 10進数の値から2進数の値へ基数変換する`);

    let num = parseInt(prompt(`Q19. 1以上の好きな正の整数を入力`));
    const nums = [];
    let newNum = num;
    let num2 = "";

    while (newNum > 0) {
        nums.unshift(newNum % 2);
        newNum = Math.floor(newNum / 2);
        console.log(newNum);
        console.log(nums);
    }

    for (let i = 0; i < nums.length; i++) {
        num2 += Number(nums[i]);
        console.log(num2);
    }

    console.log(`10進数：${num}`);
    console.log(`2進数：${num2}`);
};
