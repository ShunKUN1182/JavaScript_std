console.log("foo");

const linkEle = document.querySelector("a[href^=http]");

linkEle.addEventListener("click" , function(event) {
    event.preventDefault();
    console.log(event);
    window.open(linkEle.href , "sample05");
})