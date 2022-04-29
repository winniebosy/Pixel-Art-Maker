"use strict";;
// select form
const sizePicker = document.querySelector('#sizePicker');
// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const pixelCanvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()





function makeGrid() {
    // getting the input value for

    let inputHeight = document.querySelector('#inputHeight').value;
    let inputWidth = document.querySelector('#inputWidth').value;
    // creating td and tr
    for (let i = 0; i <= inputHeight; i++) {
        let gridRow = document.createElement('tr');
        pixelCanvas.appendChild('gridRow')
    }

};