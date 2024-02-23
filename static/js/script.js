/**
 * @Authors:            Jop Molenaar
 * @Date created:       29-01-2024
 * @Date updated:       29-01-2024
 * @Description:        
 */

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item)=>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}

const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#dialog button");
const projects = document.querySelectorAll(".projects ul li button");
projects.forEach((project) => {
    project.addEventListener("click", () => {
        dialog.showModal();
        body.classList.add("modal-open");
    });
});

closeBtn.addEventListener("click", () => {
    body.classList.remove("modal-open");
});