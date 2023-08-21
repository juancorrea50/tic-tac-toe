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
const createPlayerInfo =(function () {
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
    let _playerOne = player('');

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
        _dialogWindow.close(_selectEl.value);
        console.log('Player One Marker Chosen: ' + _confrmChce.value);
        _setPlayerMarker(_selectEl.value);
    }
    function _setPlayerMarker(mrkr){
        _playerOne.marker = mrkr;
        console.log(_playerOne);
    }
    function getPlayerMarker() {
        return _playerOne.marker;
    }
    
    _selectEl.addEventListener('change', cacheAnswer);
    _dialogWindow.addEventListener('close', valueCheck);
    _confrmChce.addEventListener('click', (e) =>{
        submitCheck(e);
        displayController.createNewGrid();
        displayController.fillGame();
        displayController.savePlayerMark(getPlayerMarker());
    });

    //Return values when called
    return {cacheAnswer, valueCheck, submitCheck, getPlayerMarker};
})();
 




//Module for gameboard display
const displayController = (function () {
    //cacheDom(creates variables for queryselector DOM elements)
    const _gameContainer = document.querySelector('.game-container');
    const _gameBoardGrid = document.createElement('div');
    let _playerMarker;
    _gameBoardGrid.classList.add('game-board-grid');
    
    //Method to create new grid inside of the game container div
    function createNewGrid() {
        _gameContainer.appendChild(_gameBoardGrid);
    }
    function savePlayerMark(mrkr){
        _playerMarker = mrkr;
        console.log(_playerMarker);
    }
    //Function to fill clicked div with the marker from the player
    function markDiv(){

    }
    //Fills the game with future interactive divs to fill them with the player marker
    function fillGame(){
        //Carry gameboard object here to access array.        
        const _gameboardCall = gameBoard;
        //Fills gameboard container with divs
        for(let i =0; i<9; i++){
            //create gameboard divs that will be referenced on click for player interaction
            const btns = document.createElement('button');
            btns.classList.add(`item-${i}`);
            //Fills array with blank space for testing
            gameBoardArray[i] = '';
            btns.innerText = gameBoardArray[i];
            /*Save for when variable is carried
            btns.addEventListener('click', () => {
                console.log('button clicked Player Marker' + _playerMarker);
                btns.innerText = _playerMarker;
            });*/
            _gameBoardGrid.appendChild(btns);
            //Potentially fill this with the event listener
            //Activate an onclick listener function that fills divs with the player marker(Continue from here)
        }
            console.log(_gameboardCall)
    }
    
    return {createNewGrid, fillGame, savePlayerMark};
 
})();

//Initialization of game
const createGame =(function () {
       function init() {
        createPlayerInfo;
    }
    init();

})();