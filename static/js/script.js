/**
 * @Authors:            Jop Molenaar
 * @Date created:       29-01-2024
 * @Date updated:       29-01-2024
 * @Description:        This file makes the first scroll animation where the photo of
 *                      me goes up slower then the sections do.
 */

// Select the image element
// const image = document.querySelector("div:nth-of-type(2)");
// const list = document.querySelector("main > div:first-child");

// let previousScrollPosition = list.scrollTop;
// let newPosition = 0;
// let prevNewPosition = 0;
// const maxTranslate = 300;

// // Function to handle the scroll event and set a translate value on the img
// const handleScroll = () => {
//     requestAnimationFrame(() => {
//         const scrollDistance = list.scrollTop - previousScrollPosition;
//         // Calculate the new image position based on the scroll distance and speed ratio
//         newPosition = newPosition + scrollDistance;

//         if (newPosition < prevNewPosition) {
//             image.style.transform = `translateY(0px)`;
//         } else {
//             if (newPosition > maxTranslate) {
//                 image.style.transform = `translateY(-${maxTranslate}px)`;
//             } else {
//                 image.style.transform = `translateY(-${newPosition}px)`;
//             }
//         }
//         prevNewPosition = newPosition;
//         previousScrollPosition = list.scrollTop;
//     });
// };

// list.addEventListener("scroll", handleScroll);
