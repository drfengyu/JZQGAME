window.onload = function() {
    const gameBoardElement = document.querySelector('#gameBoard');

    const gameMap = [
        ['-','-','-','-','#','-','-','-','-','-'],
        ['#','-','-','-','-','-','-','-','-','-'],
        ['-','-','#','-','-','-','-','#','-','-'],
        ['-','-','-','-','-','-','-','-','-','-'],
        ['-','#','-','-','-','-','-','-','#','#'],
        ['-','-','-','-','-','-','-','-','-','-'],
        ['-','#','-','-','#','-','-','#','-'],
        ['-','-','-','-','-','-','-','-','-','-','-']
    ];

    for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.innerHTML = gameMap[i][j];
            gameBoardElement.appendChild(cellElement);
        }
    }
};
