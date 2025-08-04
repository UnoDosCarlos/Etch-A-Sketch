const gridContainer = document.querySelector('#gridContainer');

function createGrid(numDivs) {
    for(let i = 0; i < numDivs; i++) {
        let panel = document.createElement('div');
        panel.classList.add('panel');
        gridContainer.appendChild(panel);

    }
};

createGrid(256);
