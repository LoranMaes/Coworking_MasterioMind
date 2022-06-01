'use strict';

(function() {
    //const backToHome = document.querySelector("#")
    const gameBtn = document.querySelector("#gameBtn");

    //creating consts for eventListeners for the players choice
   const inputColour = document.querySelectorAll(".inputColour");
   const inputColourArea = document.querySelector("#colours");
   const changeChoice = document.querySelectorAll(".guess div");
    
    //getting all the choices that te user can make or has made
    const previousChsDisp = document.querySelectorAll(".sections div");
    const currentChsDisp = document.querySelectorAll(".guess div");
    const feedback = document.querySelectorAll(".feedback div");
    const solution = document.querySelectorAll("#solution div");

    //extra param
    const maxAttempts = 7;
    const maxNrOfInputs = 4;
    const optie = true;

    //setting basic parameters
    const previousChoices = Array.apply(null, Array(maxAttempts)).map(function () {});
    const colours = ["blue","green","yellow","red"];
    const code = [];
    const currentChs = Array.apply(null, Array(maxNrOfInputs)).map(function () {});;
    let currentChsIndex = 0;
    let previousChsIndex = maxAttempts-1;

    //creating a random colour code
    const genRandCode = function() {
        for (let i = 0; i < maxNrOfInputs; i++) {
            code[i] = colours[Math.floor(Math.random()*colours.length)];
        }
    }
    //reaction to the colours the user chooses
    const makeChoice = function(colour) {
        try {
            if(currentChs === maxNrOfInputs) throw Error("Je mag maar 4 kleuren ingeven");
            else {
                currentChs[currentChsIndex] = colour;
                currentChsDisp[currentChsIndex].className = colour;
                currentChsIndex++;
            }
        } catch(err) {
            console.log(err);
        }
    }
    //submitting the choice
    const submitChoice = function() {
        previousChoices[previousChsIndex] = currentChs;
        addPreviousChsToDisp();
        feedbackFctn()
        if (chckChs()) {
            started = false;
            gameBtn.innerText = "Restart";
            showSolution();
            window.alert("You won"); 
        }
        if(previousChsIndex === 0) {
                started = false;
                showSolution();
                gameBtn.innerText = "Restart";
        }
        resetChs();
        previousChsIndex--;
    };
    //changing playing board css so the previous choices reflect the actual prev choices
    const addPreviousChsToDisp = function() {
        for(let i = 0; i < maxNrOfInputs; i++) {
            const temp = previousChoices[previousChsIndex][i];
            previousChsDisp[previousChsIndex*maxNrOfInputs+i].className = temp;
        }
    }
    //resets the choice input
    const resetChs = function() {
        for(let i = 0; i < maxNrOfInputs; i++) {
            currentChsDisp[i].className = '';
            currentChs[i] = null;
        }
        currentChsIndex = 0;
    }
    //gives feedback to user
    const feedbackFctn = function() {
        let j = 0;
        let str = "";
        let codeCopy = JSON.parse(JSON.stringify(code)); 
        let currentChsCopy = JSON.parse(JSON.stringify(currentChs)); 
        for(let i = 0; i < maxNrOfInputs; i++) {
            //if(optie)j=i;
            if (code[i] === currentChs[i]) {
                feedback[j+previousChsIndex*maxNrOfInputs].className = "black";
                str += i;
                j++;continue;
            } 
        }
        for (let i = str.length-1; i >= 0; i--) {
            codeCopy.splice(str.charAt(i),1);
            currentChsCopy.splice(str.charAt(i),1);
        }
        codeCopy.sort();
        currentChsCopy.sort();
        for(let i = 0; i< currentChsCopy.length; i++) {
            //if(optie)j=i;
            if (currentChsCopy[i] === codeCopy[i]) {
                feedback[j+previousChsIndex*maxNrOfInputs].className = "white";
                j++;continue;
            }
        }
    }
    //looks whether the input was a winner
    const chckChs = function() {
        for(let i = 0; i < maxNrOfInputs; i++) {
            if (code[i] !== currentChs[i]) return false;
        }
    
        return true;
    }
    //resets whole board
    const reset = function() {
        for(let i=0;i<maxNrOfInputs;i++){
            for(let j=0; j<maxAttempts; j++) {
                previousChsDisp[i+j*maxNrOfInputs].className = '';
                feedback[i+j*maxNrOfInputs].className = '';
            }  
        }
        for(let i =0 ; i<inputColour.length; i++) {
            inputColour[i].removeEventListener("click",()=>{
                makeChoice(colours[i]);
            });
        }

        previousChsIndex = maxAttempts -1;
    }
    //counts reoccurence of a value in an array
    const counts = function(value,arr) {
        let amounts = 0;
        for (const el of arr) el===value?amounts++:null;
        return amounts;
    }
    //show solution
    const showSolution = function() {
        for (let i = 0; i < code.length; i++) {
            solution[i].className = code[i];
        }
    }

    let started = false;
    //let ended = true;

    //main function
    const main = function() {
        if (!started) {
            reset();
            genRandCode();
            //ended = false;
            started = true;
            gameBtn.innerText = "Submit Choice";
        } else if (started && currentChsIndex === 4) {
            submitChoice();
        }
               
    }
    //eventlisteners that make the game playable
    gameBtn.addEventListener('click',main);
    for(let i = 0; i < colours.length; i++) {
        inputColour[i].addEventListener('click', ()=>{
            makeChoice(colours[i])
        })
    }
    changeChoice.forEach((el) => el.addEventListener('click', (el)=>{
        if(el.target.className !== '' && currentChsIndex > 0) {
            el.target.className = '';
            currentChsIndex--;
        }
    }));
})();