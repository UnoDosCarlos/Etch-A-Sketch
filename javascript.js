const gridContainer = document.querySelector('#gridContainer');
let numDivs;
function createGrid(gridContainer, numDivs) {
    for(let i = 0; i < numDivs * numDivs; i++) {
        let panel = document.createElement('div');
        panel.classList.add('panel');
        gridContainer.appendChild(panel);

    }
};

createGrid(gridContainer, 16);

const panels = document.querySelectorAll('.panel');


for(const panel of panels) {


panel.addEventListener('mouseover', () => {
        panel.style.backgroundColor = 'lightblue';

});
};

const gridAdjusterbtn = document.querySelector('#gridAdjusterbtn');

gridAdjusterbtn.addEventListener('click', () => {
        let userInput = prompt("Enter a new grid size:");
        let newGrid = userInput*userInput;
        
        for(const panel of panels) {

            gridContainer.removeChild(panel);
        }
        
        createGrid(newGrid);
        console.log(newGrid);


});