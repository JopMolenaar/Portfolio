const cursor = document.querySelector("body > div");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 35) + "px; left: " + (e.pageX - 35) + "px;"
  );
});

var i = 0;
var txt = "           Hoi,               ik ben Jop"; // spaces are for the time between Hoi and ik ben jop
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// var isInViewport = function (elem) {
//   var distance = elem.getBoundingClientRect();
//   return (
//     distance.top >= 0 &&
//     distance.left >= 0 &&
//     //   distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     distance.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// var findMe = document.querySelectorAll(".load");

// window.addEventListener(
//   "scroll",
//   function (event) {
//     // add event on scroll
//     findMe.forEach((element) => {
//       //for each .thisisatest
//       if (isInViewport(element)) {
//         //if in Viewport
//         element.classList.add("show");
//       }
//     });
//   },
//   false
// );
