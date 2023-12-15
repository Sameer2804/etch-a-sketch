const container = document.querySelector('#container');
const btn = document.querySelector('#btn-gridChange button')
let squares;

createGrid(16);

function removeGrid(){
    const columns = document.querySelectorAll('.column')
    columns.forEach(column => {
        container.removeChild(column);
    })
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

    squares = document.querySelectorAll('.column div');
}

function colorSquare(event, color){
    event.target.style.backgroundColor = color;
}

squares.forEach(square => {
    square.addEventListener('mouseenter', (event) => colorSquare(event, 'red'));
});

btn.addEventListener('click', () => {
    let numberOfGrids = +prompt('What number of grids do you want?');
    removeGrid();
    createGrid(numberOfGrids);
})



