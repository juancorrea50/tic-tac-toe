//Factory function to create player objects
const player = (playerNum, marker) => {
    this.marker = marker;
    this.playerNum = playerNum;
    return { marker, playerNum };
};


//Module to store array
const gameBoard = (function () {
    gameBoardArray = ['x','o','x','x','x','o','x','o','x'];
    return {
        gameBoardArray
    }
})();

//Module to display gameboard
const displayController = (function () {
    //cacheDom
    const gameContainer = document.querySelector('.game-container');
    const gameBoardGrid = document.createElement('div');
    gameBoardGrid.classList.add('game-board-grid');
    
    
    //Method to create new grid inside of the game container div
    function createNewGrid() {
        //GameboardGrid style
        gameBoardGrid.style.display = 'grid';
        gameBoardGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        gameBoardGrid.style.gridTemplateRows = 'repeat(3, 1fr)';
        gameBoardGrid.style.outline = '1px solid black';
        gameBoardGrid.style.height = 'max(29vw,49vh)';
        gameBoardGrid.style.width ='max(29vw,49vh)';
        gameBoardGrid.style.gap = '1px';

        gameContainer.appendChild(gameBoardGrid);
    }

    function fillGame(){
            //temporarily fills the div with the player answer
            //will activate an onclick listener function that fills with the player marker
            
            //Carry gameboard object here to access array.        
            const gameboardCall = gameBoard;
            //Fills gameboard container with divs
            for(let i =0; i<9; i++){
                //create gameboard divs that will be referenced on click for player interaction
                const divs = document.createElement('div');
                divs.classList.add(`item-${i}`);
                divs.innerText = gameBoardArray[i];
                gameBoardGrid.appendChild(divs);
            }
            console.log(gameboardCall)

    }

    function init() {
        //Initialize full grid based on array
            createNewGrid();
            fillGame();
    }
    
    init(); 
})();
//