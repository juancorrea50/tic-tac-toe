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

    //Select X or O
    function selX() {
        console.log("X is selected");
        setMarker('X');
        oBtn.disabled = true;
        xBtn.disabled = true;
        p1Marker.innerText += " " + playerChoice.getMarker();
        p2Marker.innerText += " O"
        createGameBtns.createGrid();
        return playerChoice.getMarker();
    }
    function selO() {
        console.log("O is selected");
        setMarker('O');
        xBtn.disabled = true;
        oBtn.disabled = true;
        p1Marker.innerText += " " + playerChoice.getMarker();
        p2Marker.innerText += " X";
        createGameBtns.createGrid();
        return playerChoice.getMarker();
    }
    //Setters and Getters for variables

    //Save selection from button functions
    function setMarker(mrkr){
        playerChoice = player(mrkr);
    }
    //Print selection from button functions
    function getMarker(){
        return playerChoice.getMarker();
    }
    //Array functionality outside of enclosure
    function pushGBA(id){
        gameBoardArray.push(id);
    }
    function getArray(){
        return gameBoardArray;
    }
    function resetArray(){
        gameBoardArray.fill('');
    }

    //Marker selection from the DOM
    console.log("Select marker from buttons on the DOM");
    xBtn.addEventListener('click', selX);
    oBtn.addEventListener('click', selO);

    return {getMarker, resetBtn, getArray, pushGBA, resetArray, setMarker, p1Marker, p2Marker, oBtn, xBtn};
})();

//End of global scope

//Object to create a gameboard once the marker is selected
const createGameBtns = (function () {
    const container = document.querySelector('.btn-container');
    const gba = domVariables.getArray();
    //Main function to create the grid
    function createGrid(){
        //For loop to create the DOM elements and append them to the premade container
        //If the container doesn't already have 9 elements append new children
        if(container.children.length != 9){
            for(let i=0;i<9;i++){
                const btn = document.createElement('button');
                btn.classList.add("item");
                btn.setAttribute("id", i);
                gba[i] = '';
                container.appendChild(btn);
            }
            const gridbtns = document.querySelectorAll('.item');
            gridbtns.forEach(gridbtns=>gridbtns.addEventListener('click',clickAction));
        }
        for(const child of createGameBtns.container.children){
            child.disabled = false;
        }

    }
    //Function for buttons functionality
    function clickAction(e){
        const playerChoice = domVariables.getMarker();
        let gba = domVariables.getArray();
        if(e.target.innerText == ''){
            e.target.innerText = playerChoice;
            
            gba[e.target.getAttribute("id")] = playerChoice;
        }

        console.log(domVariables.getArray());
        //Alternate the playerChoices
        if(playerChoice == "X"){
            domVariables.setMarker('O');
        } else {
            domVariables.setMarker('X');
        }
        //Use function from Controller module to search for a winner
        boardController.determineWinner();
    }
    return {createGrid, container};
})();

const boardController = (function () {
    //DOM transfer
    const p1M = domVariables.p1Marker;
    const p2M = domVariables.p2Marker;
    const xb = domVariables.xBtn;
    const ob = domVariables.oBtn;
    const rstBtn = domVariables.resetBtn;
    const p1ChngNm = document.querySelector(".change-p1");
    const p2ChngNm = document.querySelector(".change-p2");
    
    //Clear board and disable DOM buttons other than X and O
    function clearBoard(){
        console.log("Clear Board");
        playerChoice = '';
        p1M.innerText = "Player 1 Marker: ";
        p2M.innerText = "Player 2 Marker: ";
        ob.disabled = false;
        xb.disabled = false;
        //Reset array
        domVariables.resetArray();
        //Reset DOM contents
        for(const child of createGameBtns.container.children){
            child.innerText = '';
            child.disabled = true;
        }
    }
    
    function determineWinner(){
        let gba = domVariables.getArray();
        console.log('Checked for winner using array: ' + gba);

        //X Win Conditions
        if(
            //Diagonal conditions
            gba[0] == 'X' && gba[4] == 'X' && gba[8] == 'X' || gba[2] == 'X' && gba[4] == 'X' && gba[6] == 'X' 
            //Horizontal conditions
            || gba[0] == 'X' && gba[1] == 'X' && gba[2] == 'X' || gba[3] == 'X' && gba[4] == 'X' && gba[5] == 'X' || gba[6] == 'X' && gba[7] == 'X' && gba[8] == 'X'
            //Vertical Conditions
            || gba[0] == 'X' && gba[3] == 'X' && gba[6] == 'X' || gba[1] == 'X' && gba[4] == 'X' && gba[7] == 'X' || gba[2] == 'X' && gba[5] == 'X' && gba[8] == 'X'){

                console.log("X wins");
                _disableBtn();

        }
        //O Win Conditions
        else if(
            //Diagonal conditions
            gba[0] == 'O' && gba[4] == 'O' && gba[8] == 'O' || gba[2] == 'O' && gba[4] == 'O' && gba[6] == 'O' 
            //Horizontal conditions
            || gba[0] == 'O' && gba[1] == 'O' && gba[2] == 'O' || gba[3] == 'O' && gba[4] == 'O' && gba[5] == 'O' || gba[6] == 'O' && gba[7] == 'O' && gba[8] == 'O'
            //Vertical Conditions
            || gba[0] == 'O' && gba[3] == 'O' && gba[6] == 'O' || gba[1] == 'O' && gba[4] == 'O' && gba[7] == 'O' || gba[2] == 'O' && gba[5] == 'O' && gba[8] == 'O'){

                console.log("O wins");
                _disableBtn();

            } else {
                //Tie Condition 
                _tieCondition();
            }

    }
    //Change names of both players
    function changeName(e){
        let name = prompt("Please enter a name to change player to", "John");
        if(e.target.getAttribute("class") == "change-p1"){
            p1M.innerText = name + "'s Marker: ";
        } else if(e.target.getAttribute("class") == "change-p2"){
            p2M.innerText = name + "'s Marker: ";
        }

    }
    //Helper functions
    function _disableBtn(){
        for(const child of createGameBtns.container.children){
            child.disabled = true;
        }
    }
    
    function _tieCondition(){
        const gba = domVariables.getArray();
        if(gba.includes('') == false){
            _disableBtn();
            console.log("Tie")
        }
    }
    
    rstBtn.addEventListener("click", clearBoard);
    //Change name button functionality
    p1ChngNm.addEventListener("click", changeName);
    p2ChngNm.addEventListener("click", changeName);
    return {clearBoard, determineWinner};
})();


/*
Module = a constant variable that is assigned an IIFE(Immediately Invoked Function) that returns any value and can be used to store variables and functions

Constructor = a constant variable that is assigned a function with a parameter and assigns values based on the parameter entered to create an object
but does not return a value as all values can be accessed.

Factory Function = a function that takes in a parameter, does things with it, and returns values based on it's purpose.

Ex.
Module:
    const exModule = (function () {})();
Constructor:
    const exConstr = function (param) {
        this.param = param;
        this.changeParam = param + "A";
    }
Factory Function:
    function factFunc (param) {
        const changeParam = param + "A";
        return {changeParam, param};
    }
*/