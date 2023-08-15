//Keep styling in CSS and keep functions and variables inside of objects and modules


//Factory function to create player objects
const player = (playerNum, marker) => {
    this.marker = marker;
    this.playerNum = playerNum;
    return { marker, playerNum };
};
const createPlayer = () =>{
    const dialogWindow = document.getElementById('marker-dialog')
    dialogWindow.showModal();
    //Create Player One
}


//Module to store array
const gameBoard = (function () {
    gameBoardArray = ['x','o','x','x','x','o','x','o','x'];
    return {
        gameBoardArray
    }
})();

//Module to display gameboard
const displayController = (function () {
    //cacheDom(creates variables for queryselector DOM elements)
    const gameContainer = document.querySelector('.game-container');
    const gameBoardGrid = document.createElement('div');
    gameBoardGrid.classList.add('game-board-grid');
    
    
    //Method to create new grid inside of the game container div
    function createNewGrid() {
        gameContainer.appendChild(gameBoardGrid);
    }
    //Fills the game with future interactive divs to fill them with the player marker
    function fillGame(){
            //Temporarily fills the div with the player answer
            //(Future) activate an onclick listener function that fills divs with the player marker
            
            //Carry gameboard object here to access array.        
            const gameboardCall = gameBoard;
            //Fills gameboard container with divs
            for(let i =0; i<9; i++){
                //create gameboard divs that will be referenced on click for player interaction
                const divs = document.createElement('div');
                divs.classList.add(`item-${i}`);
                divs.innerText = gameBoardArray[i];
                gameBoardGrid.appendChild(divs);
                //Potentially fill this with the event listener 
            }
            console.log(gameboardCall)

    }

    function init() {
        //Initialize full grid based on array
        createPlayer();
        createNewGrid();
        fillGame();
    }
    
    init(); 
})();
//