console.log("hoi")

var cursor = document.querySelector("body > div");
var body = document.querySelector("body");







body.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 150)+"px; left: "+(e.pageX - 150)+"px;");



});










