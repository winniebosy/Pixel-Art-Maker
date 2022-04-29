// select form
const sizePicker = document.querySelector('#sizePicker');

// Select size input
const pixelCanvas = document.querySelector('#pixelCanvas');

// select clear button
let resetButton = document.querySelector('.reset-button');

// to fill the whole table 
const fillButton = document.querySelector('.fill-button');


// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let inputHeight = document.querySelector('#inputHeight').value;
    let inputWidth = document.querySelector('#inputWidth').value;
    //removes the any present grid cells created
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    for (let i = 1; i <= inputHeight; i++) {
        let gridRow = document.createElement('tr');
        pixelCanvas.appendChild(gridRow);
        for (let j = 1; j <= inputWidth; j++) {
            let gridCols = document.createElement('td');
            gridRow.appendChild(gridCols);
            gridCols.addEventListener('mousedown', function() {
                // Select color input
                const colorPicker = document.querySelector('#colorPicker').value;
                this.style.backgroundColor = colorPicker;
            });
        }
    }
}

makeGrid();

// upon selecting, then submitting.
sizePicker.addEventListener('submit', function(e) {
    //prevents submitting action
    e.preventDefault();
    makeGrid();
});


//to clear the table and reset
resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    pixelCanvas.remove();
});


// fills in color for each td
fillButton.addEventListener('click', function(e) {
    e.preventDefault();
    const color = document.querySelector('#colorPicker').value;
    pixelCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
});


// removes color from the grid when clicked
pixelCanvas.addEventListener('dblclick', function(e) {
    e.target.style.backgroundColor = null;
});