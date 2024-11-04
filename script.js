const container = document.querySelector(".container");

let divSize = 16; // initial grid size (16x16)

const buttonGrid = document.createElement("button");
buttonGrid.textContent = "Enter new grid size - Current grid " + divSize + 
    " x " + divSize;;
document.body.appendChild(buttonGrid);
document.body.appendChild(container);

function createGrid(divSize) {
    for (i = 0; i < divSize; i++) {
        const divWidth = document.createElement("div");
        divWidth.classList.add("divWidth");
        container.appendChild(divWidth);
        for (j = 0; j < divSize; j++) {
            const divHeight = document.createElement("div");
            divHeight.classList.add("divHeight");
            divWidth.appendChild(divHeight);
        }
    }
};
createGrid(divSize);

function gridHover() {
    const gridCubes = document.querySelectorAll("div.divHeight");
    gridCubes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add("hovered");
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('hovered');
        })
    });
}
gridHover();

function gridClick() {
    const gridCubes = document.querySelectorAll("div.divHeight");
    gridCubes.forEach((div) => {
        div.addEventListener('click', () => {
            if (!div.classList.contains("clicked")) {
                div.classList.add("clicked");    
            }
            else {
                div.classList.remove("clicked");
            }
        });
    });
}
gridClick();

// new clickEvent = CustomEvent() 

buttonGrid.addEventListener('click', () => {
    console.log("btn click");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    divSize = parseInt(prompt("Enter new grid size (Maximum 100): "));
    while (divSize > 100) {
        alert("Maximum grid size is 100");
        divSize = parseInt(prompt("Enter new grid size: "));
    }
    buttonGrid.textContent = "Enter new grid size - Current grid " + divSize + 
        " x " + divSize;
    createGrid(divSize);
    gridHover();
    gridClick();
});