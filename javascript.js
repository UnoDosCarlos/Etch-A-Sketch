const gridContainer = document.querySelector('#gridContainer');

function createGrid(numDivs) {
    for(let i = 0; i < numDivs; i++) {
        let panel = document.createElement('div');
        panel.classList.add('panel');
        gridContainer.appendChild(panel);

    }
};

createGrid(256);

const panels = document.querySelectorAll('.panel');


for(const panel of panels) {


panel.addEventListener('mouseover', () => {
        panel.style.backgroundColor = 'lightblue';


});

panel.addEventListener('mouseout', () => {
        panel.style.backgroundColor = 'lightblue';
        
});

};

const gridAdjusterbtn = document.querySelector('#gridAdjusterbtn');

gridAdjusterbtn.addEventListener('click', () => {
        let userInput = prompt("Enter a new grid size:");




});