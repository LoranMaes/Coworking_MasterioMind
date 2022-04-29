'use strict';

(function() {
    
    //creating eventListeners for the players choice
    const inputColour = document.querySelectorAll(".inputColour");

    
    //getting all the choices that te user can make or has made
    const previousChsDisp = document.querySelectorAll(".sections div");
    const currentChsDisp = document.querySelectorAll(".guess div");

    //extra param

    const maxAttempts = 7;
    const maxNrOfInputs = 4;

    //setting basic parameters
    const previousChoices = Array.apply(null, Array(maxAttempts)).map(function () {});
    const colours = ["blue","green","yellow","red"];
    const code = [];
    const currentChs = Array.apply(null, Array(maxAttempts)).map(function () {});;
    let currentChsIndex = 0;
    let previousChsIndex = maxAttempts;

    //creating a random colour code
    const genRandCode = function() {
        for (let i = 0; i < maxNrOfInputs; i++) {
            code[i] = colours[Math.floor(Math.random()*colours.length)];
        }
        
    }

    //reaction to the colours the user chooses
    const makeChoice = function(colour) {
        currentChs[currentChsIndex] = colour;
        currentChsDisp[currentChsIndex].classList.toggle = `.${colour}`;
        currentChsIndex++;
    }

    //changing playing board css so the previous choices reflect the actual prev choices
    const addPreviousChsToDisp = function() {
        for(let i = 0; i < maxAttempts; i++) {
            if (previousChoices == null) continue;
            for(let j = 0; j < maxNrOfInputs; j++) {
                const temp = previousChoices[i][j];
                previousChsDisp[i+j*3].classList.toggle = `.${temp}`; 
            }
        }
    }
    const resetChs = function() {
        for(let i = 0; i < maxNrOfInputs; i++) {
            currentChsDisp[i].classList.toggle = `.${currentChs[i]}`;
            currentChs[i] = null;
        }
        currentChsIndex = 0;
    }
    const chckChs = function() {
        for(let i = 0; i < maxNrOfInputs; i++) {
            if (code[i] !== currentChs[i]) return false;
        }
        return true;
    }


    //submitting the choice
    const submitChoice = function() {
        previousChoices[previousChsIndex] = currentChs;
        addPreviousChsToDisp;
        chckChs;
        resetChs;
    }


    //main function
    const main = function() {
        genRandCode();
        for(let i =0 ; i<inputColour.length; i++) {
            inputColour[i].addEventListener('click', makeChoice(colours[i]));
        }
    }
    document.querySelector("#start").addEventListener('click',main);
    document.querySelector("#submitChoice").addEventListener('click',submitChoice);


})();