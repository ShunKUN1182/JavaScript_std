const inputHeight = document.querySelector("#input_height");
const checkButton = document.querySelector("#btn_check");

checkButton.addEventListener("click", () => {
    let checkHeight = inputHeight.value;
    console.log(checkHeight);

    if (checkHeight >= 120 && checkHeight <= 200) {
        console.log("のっていいですよ");
    } else {
        console.log("のっちゃだめだよ");
    }
});

// if elseをやりましょう

const trafficLight = document.querySelectorAll(".traffic_light");
const trafficBtn = document.querySelector("#btn_traffic_check");
console.log(trafficLight.value);

trafficLight.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.value == 1) {
            console.log("渡っていいよ");
        } else if (e.value == 2) {
            console.log("もうちょいまてよ");
        } else if (e.value == 3) {
            console.log("わたっちゃだめだぞ");
        } else {
            console.log("なにかがおかしいぞ");
        }
    });
});
