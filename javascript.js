//Create a tic tac toe game using arrays to use later in the DOM
    //Create 2D array and variables
    //Create function to choose a place in the array
    //Create an AI that randomly places the opposite marker
    //function that checks for a winner after all slots are filled
//Use modular js and objects for all variables and functions

const player = function (marker) {
    this.marker = marker;
    function getMarker() {
        return marker;
    }
    return {getMarker};
}
const domVariables = (function () {
    //DOM Cache
    const xBtn = document.querySelector(".x");
    const oBtn = document.querySelector(".o");
    const p1Marker = document.querySelector(".p1-marker");
    const p2Marker = document.querySelector(".p2-marker");
    const resetBtn = document.querySelector(".reset");

    let playerChoice;
    let gameBoardArray = [];

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
        console.log(createPlayerInfo.getPlayerMarker());
    }
    init();

})();