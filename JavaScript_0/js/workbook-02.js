//
// workbook-02.js
// 問題番号：10 ~ 14
// 各設問に対するプログラムを{}の中に実装しましょう。
//

const q10 = () => {
    // ----------------------------------------
    // 10. 0 or not 0
    // ----------------------------------------
    console.log(
        `10. 整数を入力して、その値が 0 なら「 ZERO 」、0 でなければ「 not ZERO 」とコンソールに表示する`
    );

    const checkZero = prompt(`Q10. 数値を入力`);
    if (checkZero == false) {
        console.log("ZERO");
    } else {
        console.log("not ZERO");
    }
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q11 = () => {
    // ----------------------------------------
    // 11. 都道府県番号検索
    // ----------------------------------------
    console.log(`11. 都道府県番号を入力し、その値に該当する都道府県名をコンソールに表示する`);

    const kinkiNum = parseInt(prompt(`Q11. 都道府県番号を入力`));

    if (kinkiNum == 25) {
        console.log(`都道府県番号：${kinkiNum}`, "滋賀県");
    } else if (kinkiNum == 26) {
        console.log(`都道府県番号：${kinkiNum}`, "京都府");
    } else if (kinkiNum == 27) {
        console.log(`都道府県番号：${kinkiNum}`, "大阪府");
    } else if (kinkiNum == 28) {
        console.log(`都道府県番号：${kinkiNum}`, "兵庫県");
    } else if (kinkiNum == 29) {
        console.log(`都道府県番号：${kinkiNum}`, "奈良県");
    } else if (kinkiNum == 30) {
        console.log(`都道府県番号：${kinkiNum}`, "和歌山県");
    }
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q12 = () => {
    // ----------------------------------------
    // 12. 奇数 or 偶数
    // ----------------------------------------
    console.log(
        `12. 整数を入力し、その値が偶数なら「 even 」、奇数ならば「 odd 」とコンソールに表示する`
    );

    const numA = parseInt(prompt(`Q12. 整数を入力`));
    const evenodd = numA % 2;
    if (evenodd == 0) {
        console.log(`入力した値：${numA}`, "even");
    } else {
        console.log(`入力した値：${numA}`, "odd");
    }
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q13 = () => {
    // ----------------------------------------
    // 13. 入園料の計算
    // ----------------------------------------
    console.log(
        `13. 入園人数を入力して、その入園料金をコンソールに表示する\r\n入園料：１人８００円、５人以上のグループなら１人７６０円、２０人以上の団体なら１人５００円`
    );

    const enrollers = parseInt(prompt(`Q13. 入園者数を入力`));
    if (enrollers >= 20) {
        console.log(`入園者：${enrollers}人`, `入園料金：${enrollers * 500}円`);
    } else if (enrollers >= 5) {
        console.log(`入園者：${enrollers}人`, `入園料金：${enrollers * 760}円`);
    } else {
        console.log(`入園者：${enrollers}人`, `入園料金：${enrollers * 800}円`);
    }
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q14 = () => {
    // ----------------------------------------
    // 14. 成績評価判定
    // ----------------------------------------
    console.log(
        `14. 出席率と評価点を入力し、A ~ Fの評価判定結果をコンソールに表示する\r\n評価判定は、出席率７５％以上 かつ \r\n評価点90~100：A\r\n評価点80~89：B\r\n評価点70~79：C\r\n評価点60~69：D\r\n評価点60未満：F\r\n出席率が75%未満の場合は、評価点に関わらず判定はF`
    );

    const attendanceRate = parseFloat(prompt(`Q14. 出席率の入力`));
    const evaluationPoints = parseInt(prompt(`Q14. 評価点の入力`));
    if (evaluationPoints <= 100 && evaluationPoints >= 0) {
        checkAttendanceRate();
    } else {
        alert("error");
    }

    function checkAttendanceRate() {
        if (attendanceRate >= 75) {
            checkScore();
        } else {
            inputScore("F");
        }
    }

    function checkScore() {
        if (evaluationPoints >= 90 && evaluationPoints <= 100) {
            inputScore("A");
        } else if (evaluationPoints > 90 && evaluationPoints <= 80) {
            inputScore("B");
        } else if (evaluationPoints > 80 && evaluationPoints <= 70) {
            inputScore("C");
        } else if (evaluationPoints > 70 && evaluationPoints <= 60) {
            inputScore("D");
        } else if (evaluationPoints > 60 && evaluationPoints <= 0) {
            inputScore("F");
        } else {
            alert("error");
        }
    }

    function inputScore(score) {
        console.log(`出席率：${attendanceRate}%`);
        console.log(`評価点：${evaluationPoints}点`);
        console.log(`判定：${score}判定`);
    }
};
