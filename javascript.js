const gridContainer = document.querySelector('#gridContainer');
const panels = document.querySelectorAll('.panels');
const gridAdjusterbtn = document.querySelector('#gridAdjusterBtn');
const clearBtn = document.querySelector('#clearBtn');

function getRandomRgbColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

}


function createGrid(gridContainer, numDivs) {
    for(i = 0; i < numDivs * numDivs; i++) {
        let panels = document.createElement('div');
        panels.classList.add('panels');

        gridContainer.appendChild(panels);

        panels.style.opacity = 0;


        panels.addEventListener('mouseover', () => {
            panels.style.backgroundColor = getRandomRgbColor();
            let currentOpacity = parseFloat(panels.style.opacity);
            const incrementValue = .1;
            currentOpacity += incrementValue;
            if(currentOpacity > 1) {
                currentOpacity = 1;
            }
            panels.style.opacity = currentOpacity;
        })
}};

createGrid(gridContainer, 16);


gridAdjusterBtn.addEventListener('click', () => {
        let newGridNumber = parseInt(prompt("Enter a new grid size:"));
        if(newGridNumber !== null && newGridNumber <= 100 && newGridNumber > 0) {

            gridContainer.replaceChildren();


                for(i = 0; i < newGridNumber*newGridNumber; i++) {

                        let panels = document.createElement('div');
                        panels.classList.add('panels');
                        panels.style.flex = `0 0 calc(100% / ${newGridNumber})`;

                        gridContainer.appendChild(panels);

                        panels.style.opacity = 0;

                        panels.addEventListener('mouseover', () => {
                            panels.style.backgroundColor = getRandomRgbColor();
                            let currentOpacity = parseFloat(panels.style.opacity);
                            const incrementValue = .1;
                            currentOpacity += incrementValue;
                            if(currentOpacity > 1) {
                                currentOpacity = 1;
                            }
                            panels.style.opacity = currentOpacity;
                        });
                    }
            } else {
            alert('Please enter a number between 1-100');
        }
    });

clearBtn.addEventListener('click', () => {
    const panels = document.querySelectorAll('.panels');
        panels.forEach(panel => {
            panel.style.backgroundColor =  'lightgray';
            panel.style.opacity = 0;          
        })
    });


