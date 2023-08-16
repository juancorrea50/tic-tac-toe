//Keep styling in CSS and keep functions and variables inside of objects and modules


//Factory function to create player objects
const player = (marker) => {
    this.marker = marker;
    return { marker };
};
//Factory function to create player profile from modal submission
const createPlayer = () =>{
    //Dom cache for function 
    const dialogWindow = document.getElementById('marker-dialog');
    const confrmChce = document.getElementById('confirm-choice');
    const selectEl = document.getElementById('marker');
    const playerInfo = document.querySelector('.player-info')
    //Show modal opens modal and dims background (Cannot center for some reason)
    dialogWindow.showModal();
    //Confirm button disabled by default
    confrmChce.disabled=true;
    //Variable to return for player identity marker
    let playerOne = '';
    //Function for choice change
    function cacheAnswer(){
        confrmChce.value = selectEl.value;
        console.log(confrmChce.value);
        if(confrmChce.value == 'default'){
            confrmChce.disabled=true;
        } else {
            confrmChce.disabled=false;
        }
    }
    //Function 
    function valueCheck(){
        dialogWindow.returnValue == 'default' ?
        console.log('marker not chosen') :
        playerInfo.innerText += ` ${dialogWindow.returnValue.toUpperCase()}`;
    }
    function submitCheck(event){
        event.preventDefault();
        console.log('default prevented')
        dialogWindow.close(selectEl.value);
        playerOne = player(selectEl.value);
        console.log('Player One Marker Chosen: ' + playerOne.marker);
    }


    selectEl.addEventListener('change', cacheAnswer);
    dialogWindow.addEventListener('close', valueCheck);
    confrmChce.addEventListener('click', submitCheck);
    
    return { playerOne };
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