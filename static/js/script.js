// const cursor = document.querySelector("body > div");
// const body = document.querySelector("body");

// body.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     "style",
//     "top: " + (e.pageY - 35) + "px; left: " + (e.pageX - 35) + "px;"
//   );
// });

// var i = 0;
// var txt = "           Hoi,               ik ben Jop"; // spaces are for the time between Hoi and ik ben jop
// var speed = 70;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("type").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

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

// Select the image element
const image = document.querySelector("div:nth-of-type(2)");
const list = document.querySelector("main > div:first-child");
// Set the scroll speed ratio for the image (50% slower)
const scrollSpeedRatio = 0.5;
let previousScrollPosition = list.scrollTop;
let newPosition = 0;
let prevNewPosition = 0;
const maxTranslate = 300;

let eventEnabled = true;
let eventEnabled2 = true;
// Function to handle the scroll event
const handleScroll = () => {
    requestAnimationFrame(() => {
        const scrollDistance = list.scrollTop - previousScrollPosition;
        // Calculate the new image position based on the scroll distance and speed ratio
        newPosition = newPosition + scrollDistance;

        if (newPosition < prevNewPosition) {
            image.style.transform = `translateY(0px)`;
        } else {
            if (newPosition > maxTranslate) {
                image.style.transform = `translateY(-${maxTranslate}px)`;
            } else {
                image.style.transform = `translateY(-${newPosition}px)`;
            }
        }
        prevNewPosition = newPosition;
        previousScrollPosition = list.scrollTop;
    });
};

// Attach the scroll event listener to the window object
list.addEventListener("scroll", handleScroll);
