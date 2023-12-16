const container = document.querySelector('#container');
const btn = document.querySelector('#btn-gridChange button')
const btnClear = document.querySelector('#btn-clear')

createGrid(16);

function removeGrid(){
    const columns = document.querySelectorAll('.column')
    columns.forEach(column => {
        container.removeChild(column);
    })
}

function randomRGBValue(){
   return Math.floor(Math.random() * 256); 
}


function createGrid(numberOfGrids){

    for(let i=0; i< numberOfGrids; i++){
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        container.appendChild(column);
        
        for(let j=0; j< numberOfGrids; j++){
            const square = document.createElement('div');
            column.appendChild(square);
        }
    
    }

    let squares = document.querySelectorAll('.column div');

    squares.forEach(square => {
        square.addEventListener('mouseenter', (event) => colorSquare(event, randomRGBValue(), randomRGBValue(), randomRGBValue()));

        btnClear.addEventListener('click', (event) => {
            square.style.backgroundColor = 'white';
        })
    });
}

function colorSquare(event, r, g, b){
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    let numberOfGrids = -1;
    while(numberOfGrids < 0 || numberOfGrids >= 100){
        numberOfGrids = +prompt('What number of grids do you want? < 100');
    }

    removeGrid();
    createGrid(numberOfGrids);
})



