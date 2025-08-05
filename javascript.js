const gridContainer = document.querySelector('#gridContainer');
const panels = document.querySelectorAll('.panel');
const gridAdjusterbtn = document.querySelector('#gridAdjusterbtn');



function createGrid(gridContainer, numDivs) {
    for(i = 0; i < numDivs * numDivs; i++) {
        let panel = document.createElement('div');
        panel.classList.add('panel');

        gridContainer.appendChild(panel);

        panel.addEventListener('mouseover', () => {
            panel.style.backgroundColor = 'lightblue';
    })
}};

createGrid(gridContainer, 16);


gridAdjusterbtn.addEventListener('click', () => {
        let newGridNumber = parseInt(prompt("Enter a new grid size:"));
        if(newGridNumber !== null && newGridNumber <= 100 && newGridNumber > 0) {

            gridContainer.replaceChildren();


                for(i = 0; i < newGridNumber*newGridNumber; i++) {

                        let panel = document.createElement('div');
                        panel.classList.add('panel');
                        panel.style.flex = `0 0 calc(100% / ${newGridNumber})`;

                        gridContainer.appendChild(panel);

                        panel.addEventListener('mouseover', () => {
                            panel.style.backgroundColor = 'lightblue';

                        });
                    }
            } else {
            alert('Please enter a number between 1-100');
        }
    });

