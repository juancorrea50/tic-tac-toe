//Keep styling in CSS and keep functions and variables inside of objects and modules
//REMEMBER THAT MODULES AND FACTORY FUNCTIONS ARE FOR CREATING PRIVATE VARIABLES AND FUNCTIONS*******
//TREAT MODULES LIKE CLASSES AND THE INIT MODULE LIKE A DRIVER CLASS
//'_' before the variable name means private/ not returned

//Factory function to create player objects
const player = (marker) => {
    this.marker = marker;
    return { marker };
};
//Module to store array
const gameBoard = (function () {
    //gameBoardArray = ['x','o','x','x','x','o','x','o','x'];
    gameBoardArray = [];
    return {
        gameBoardArray
    }
})();

//Factory function to create player profile from modal submission
const createPlayerInfo = () => {
    //Dom cache for function 
    const _dialogWindow = document.getElementById('marker-dialog');
    const _confrmChce = document.getElementById('confirm-choice');
    const _selectEl = document.getElementById('marker');
    const _playerInfo = document.querySelector('.player-info');

    //Show modal opens modal and dims background (Cannot center for some reason)
    _dialogWindow.showModal();

    //Confirm button disabled by default
    _confrmChce.disabled=true;
    //variable to store player object


    //Function for choice change
    function cacheAnswer(){
        _confrmChce.value = _selectEl.value;
        console.log(_confrmChce.value);
        if(_confrmChce.value == 'default'){
            _confrmChce.disabled=true;
        } else {
            _confrmChce.disabled=false;
        }
    }
//Checks for value inside of the dialog and modal
    function valueCheck(){
        _playerInfo.innerText += ` ${_dialogWindow.returnValue.toUpperCase()}`;
    }
    function submitCheck(event){
        event.preventDefault();
        console.log('default prevented')
        _dialogWindow.close(_selectEl.value);
        console.log('Player One Marker Chosen: ' + _confrmChce.value);
    }
    
    _selectEl.addEventListener('change', cacheAnswer);
    _dialogWindow.addEventListener('close', valueCheck);
    _confrmChce.addEventListener('click', submitCheck);
    //Return values when called
    return {cacheAnswer, valueCheck, submitCheck};
}
 




//Module for gameboard display
const displayController = (function () {
    //cacheDom(creates variables for queryselector DOM elements)
    const _gameContainer = document.querySelector('.game-container');
    const _gameBoardGrid = document.createElement('div');
    _gameBoardGrid.classList.add('game-board-grid');
    
    
    //Method to create new grid inside of the game container div
    function createNewGrid() {
        _gameContainer.appendChild(_gameBoardGrid);
    }
    //Fills the game with future interactive divs to fill them with the player marker
    function fillGame(){
            //Activate an onclick listener function that fills divs with the player marker
            /*function answerClick(){
                divs.innerText = player;
            }*/
            //Carry gameboard object here to access array.        
            const _gameboardCall = gameBoard;
            //Fills gameboard container with divs
            for(let i =0; i<9; i++){
                //create gameboard divs that will be referenced on click for player interaction
                const divs = document.createElement('div');
                divs.classList.add(`item-${i}`);
                //Fills array with blank space for testing
                gameBoardArray[i] = '';
                divs.innerText = gameBoardArray[i];
                _gameBoardGrid.appendChild(divs);
                //Potentially fill this with the event listener 
            }
            console.log(_gameboardCall)
    }
    
    return {createNewGrid, fillGame};
 
})();

//Initialization of game
const createGame =(function () {
       function init() {
        createPlayerInfo();
        displayController.createNewGrid();
        displayController.fillGame();
    }
    init();
});
createGame();