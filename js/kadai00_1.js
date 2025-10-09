//
// kadai00_1.js
//

// ブラウザの表示領域の中でマウスが動いたとき
document.onmousemove = function( event ) {
  
  // マウスの表示領域の中の座標（ X , Y ）
  // X座標：event.clientX
  // Y座標：event.clientY
  // コンソールの表示が邪魔になる際は、コメントアウトしてください
  console.log( `X: ${ event.clientX }`, `Y: ${ event.clientY }` );

  // マウスストーカーの画像（ #cursor ）が、
  // マウスカーソルの位置（x座標、y座標）に来るようにスタイルを設定してください。
  document.querySelector( "#cursor" ).style.transform = 
    `translateX(${ event.clientX }px) translateY(${ event.clientY }px)`;

}
