/**
 * @Authors:            Jop Molenaar
 * @Date created:       29-01-2024
 * @Date updated:       29-01-2024
 * @Description:        
 */

const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#dialog button");
const projects = document.querySelectorAll(".projects ul li button");
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}
function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

async function getProjectData(project) {
    fetch("projects.json", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((response) => {
            JSON.stringify(response);
            response.projects.forEach((projectFromData) => {
                if (projectFromData.name === project) {
                    fillDialog(projectFromData);
                    return projectFromData;
                }
            });
        });
}

function fillDialog(project) {
    const article = dialog.querySelector("article");
    article.innerHTML = "";
    const title = document.createElement("h4");
    const p = document.createElement("p");
    const imageSection = document.createElement("section");
    title.textContent = project.name;
    p.textContent = project.article;
    article.appendChild(title);
    article.appendChild(p);
    article.appendChild(imageSection);
    project.images.forEach((imageSrc) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        imageSection.appendChild(img);
    });
    dialog.showModal();
    body.classList.add("modal-open");
}

projects.forEach((project) => {
    project.addEventListener("click", async () => {
        getProjectData(project.dataset.project);
    });
});
closeBtn.addEventListener("click", () => {
    body.classList.remove("modal-open");
});