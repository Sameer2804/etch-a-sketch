const container = document.querySelector('#container');
for(let i=0; i< 16; i++){
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
    for(let j=0; j<16; j++){
        const square = document.createElement('div');
        square.style.border = 'solid'
        square.style.width = '40px';
        square.style.height = '40px';
        row.appendChild(square);
    }
    
}

console.log(container.childElementCount);