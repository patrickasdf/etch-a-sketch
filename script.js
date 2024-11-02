const container = document.querySelector(".container");

let divSize = 16; // div grid size (16x16 etc.)

function createDivWidth(divSize) {
    for (i = 0; i < divSize; i++) {
        const divWidth = document.createElement("div");
        divWidth.classList.add("divWidth");
        divWidth.style.width = 800 / divSize + "px";
        divWidth.textContent = i + "-div";
        container.appendChild(divWidth);
        for (j = 0; j < divSize; j++) {
            const divHeight = document.createElement("div");
            divHeight.classList.add("divHeight");
            divHeight.textContent = "div-" + j;
            divWidth.appendChild(divHeight);
        }
    }
};
createDivWidth(divSize);