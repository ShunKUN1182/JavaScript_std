//
// kadai00_2.js
//

// CSSのグラデーション
// background-image: linear-gradient( 角度deg, カラー1, カラー2 )

// タグの表示
// タグ情報.textContent

// Formの入力部品の入力値が入っているのはvalue属性
// タグ情報.value

// bodyタグの背景色に#set_color1と#set_color2と#set_degreeの入力値を使って線形グラデーションを設定


// #set_color1を入力しているとき
document.querySelector( "#set_color1" ).oninput = function() {
  
  // #txt_color1に#set_color1の入力値を表示する
  document.querySelector( "#txt_color1" ).textContent = 
  document.querySelector( "#set_color1" ).value;
  document.body.style.backgroundImage = 
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください
    document.querySelector("#txt_result").textContent =
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください

}


// #set_color2を入力しているとき

document.querySelector("#set_color2").oninput = function () {
  document.querySelector("#txt_color2").textContent =
  document.querySelector("#set_color2").value;
  document.body.style.backgroundImage = 
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください
    document.querySelector("#txt_result").textContent =
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください

}


// #set_degreeを入力しているとき

document.querySelector("#set_degree").oninput = function(){
  document.querySelector("#txt_degree").textContent =
  document.querySelector("#set_degree").value;
  document.body.style.backgroundImage = 
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください
    document.querySelector("#txt_result").textContent =
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください

}

document.querySelector("#txt_result").textContent =
    `linear-gradient( ${document.querySelector("#set_degree").value}deg, ${document.querySelector("#set_color1").value}, ${document.querySelector("#set_color2").value} )`; // 角度、カラー１、カラー２を変更してください


// ページを表示したときに実行したい命令

  
// #txt_color1に#set_colo1の入力値を表示

// #txt_color2に#set_colo2の入力値を表示

// #txt_degreeに#set_degreeの入力値を表示

// #txt_resultに線形グラデーションの設定値を表示
