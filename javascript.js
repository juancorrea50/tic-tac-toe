//Factory function to create player objects
const player = (playerNum, marker) => {
    this.marker = marker;
    this.playerNum = playerNum;
    return { marker, playerNum };
};


//Module to store array
const gameBoard = (function () {
    gameBoardArray = ['x','o','x','x','x','o','x','o','x'];
})();

//Module to display gameboard
const displayController = (function () {
    
})();
//